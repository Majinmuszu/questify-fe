import React from "react";
import s from "./Card.module.css";
import starIcon from "../../icons/star.svg";
import ellipseRed from "../../icons/ellipse-red.svg";
import ellipseGreen from "../../icons/ellipse-green.svg";
import ellipseBlue from "../../icons/ellipse-blue.svg";
import { useUpdateCardStatusMutation } from "../../services/api";
import { Confirm } from "notiflix";

const Card = ({ cardsData, todaysDate }) => {
  const [isDoneStatus] = useUpdateCardStatusMutation();

  const setDoneStatus = (e) => {
    e.preventDefault();
    const cardID = e.target.id;
    let queryObject = { cardID, isDone: true };
    Confirm.show(
      "Please confirm",
      "Are you sure you done this task?",
      "Yes",
      "No",
      () => {
        isDoneStatus(queryObject);
      },
      () => {
        // alert("If you say so...");
      }
    );
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
                {/* <button id={_id} onClick={setDoneStatus}> */}
                {/* <Link to="/card/complete/6274348a6e82ebbc72257c4c">but</Link> */}
                {/* </button> */}
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
                  {todaysDate ? todaysDate + ", " + time : date + ", " + time}
                </h4>
              </div>
              <div className={s.CategoryWrapper}>
                <p className={s.CardCategory}>{category}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Card;
