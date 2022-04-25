// import { hasExpectedRequestMetadata } from "@reduxjs/toolkit/dist/matchers";
import React from "react";
import s from "./Card.module.css";

const Card = ({ level, favorite, cardTitle, date, category, cardsData }) => {
  return (
    <>
      <ul className={s.CardList}>
        {cardsData.map(({ id, level, favorite, cardTitle, date, category }) => (
          <li key={id} className={s.CardItem}>
            <div className={s.HeaderWrapper}>
              <p className={s.level}>{level}</p>
              <p>false</p>
            </div>
            <div className={s.TitleWrapper}>
              <h2 className={s.CardTitle}>{cardTitle}</h2>
              <h4 className={s.CardDate}>{date}</h4>
            </div>
            <span className={s.CardCategory}>{category}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
