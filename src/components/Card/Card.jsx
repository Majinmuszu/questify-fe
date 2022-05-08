import React, { useState } from "react";
import s from "./Card.module.css";
import starIcon from "../../icons/star.svg";
import awardIcon from "../../icons/award.svg";
import arrowTaskIcon from "../../icons/arrowTask.svg";
import ellipseRed from "../../icons/ellipse-red.svg";
import ellipseGreen from "../../icons/ellipse-green.svg";
import ellipseBlue from "../../icons/ellipse-blue.svg";
import { useUpdateCardStatusMutation } from "../../services/api";
import { Animated } from "react-animated-css";

const Card = ({ cardsData, todaysDate }) => {
  const [isDoneStatus] = useUpdateCardStatusMutation();
  const [isAward, setIsAward] = useState(false);
  const [cardID, setCardID] = useState("");

  const setDoneStatus = (e) => {
    e.preventDefault();
    const cardID = e.target.id;
    setCardID(cardID);
    setIsAward(true);
  };

  const moveToDone = () => {
    let queryObject = { cardID, isDone: true };
    isDoneStatus(queryObject);
  };

  return (
    <>
      <ul className={s.CardList}>
        {cardsData.map(
          ({
            _id,
            difficulty,
            favorite,
            title,
            date,
            category,
            time,
            type,
          }) => (
            <li key={_id} className={s.CardItem}>
              {isAward && _id === cardID ? (
                <div className={s.awardWrapper}>
                  <p className={s.awardTitle}>
                    COMPLETED:{" "}
                    <span className={s.awardTitleName}>
                      {title.length > 11 ? title.slice(0, 11) + "..." : title}
                    </span>
                  </p>
                  <Animated
                    animationIn="bounceIn"
                    animationOut="fadeOut"
                    isVisible={true}>
                    <img
                      className={s.awardIcon}
                      src={awardIcon}
                      alt="award"
                      tabIndex="1"
                    />
                  </Animated>
                  <div className={s.awardConfirmWrapper}>
                    <p className={s.awardConfirm} onClick={moveToDone}>
                      Continue
                    </p>
                    <img
                      className={s.arrowTaskIcon}
                      src={arrowTaskIcon}
                      alt="award"
                      tabIndex="1"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className={s.HeaderWrapper}>
                    <div className={s.levelWrapper}>
                      {difficulty === "hard" ? (
                        <img src={ellipseRed} alt="star" tabIndex="1"></img>
                      ) : difficulty === "normal" ? (
                        <img src={ellipseGreen} alt="star" tabIndex="1"></img>
                      ) : difficulty === "easy" ? (
                        <img src={ellipseBlue} alt="star" tabIndex="1"></img>
                      ) : (
                        <></>
                      )}
                      <p className={s.level}>{difficulty}</p>
                    </div>
                    <img
                      id={_id}
                      className={s.starIcon}
                      src={starIcon}
                      alt="star"
                      tabIndex="1"
                      onClick={setDoneStatus}></img>
                  </div>
                  <div className={s.TitleWrapper}>
                    <h2 className={s.CardTitle}>{title}</h2>
                    <h4 className={s.CardDate}>
                      {todaysDate
                        ? todaysDate + ", " + time
                        : date + ", " + time}
                    </h4>
                  </div>
                  <div className={s.CategoryWrapper}>
                    <p
                      className={
                        category === "stuff"
                          ? `${s.CardCategory} ${s.stuff}`
                          : category === "work"
                          ? `${s.CardCategory} ${s.work}`
                          : category === "family"
                          ? `${s.CardCategory} ${s.family}`
                          : category === "health"
                          ? `${s.CardCategory} ${s.health}`
                          : category === "learning"
                          ? `${s.CardCategory} ${s.learning}`
                          : category === "leisure"
                          ? `${s.CardCategory} ${s.leisure}`
                          : s.CardCategory
                      }>
                      {category}
                    </p>
                  </div>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Card;
