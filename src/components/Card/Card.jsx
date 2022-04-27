import React from "react";
import s from "./Card.module.css";
import starIcon from "../../icons/star.svg";

const Card = ({ cardsData }) => {
  return (
    <>
      <ul className={s.CardList}>
        {cardsData.map(
          ({ id, difficulty, favorite, title, date, category, time, type }) => (
            <li key={id} className={s.CardItem}>
              <div className={s.HeaderWrapper}>
                <p className={s.level}>{difficulty}</p>
                <img
                  className={s.starIcon}
                  src={starIcon}
                  alt="star"
                  tabIndex="1"></img>
                {/* <p>false</p> */}
              </div>
              <div className={s.TitleWrapper}>
                <h2 className={s.CardTitle}>{title}</h2>
                <h4 className={s.CardDate}>{date}</h4>
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
