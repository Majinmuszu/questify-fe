import React from "react";
import Card from "../Card/Card";
import s from "./Tasks.module.css";

const Tasks = ({ title, cardsData, children, todaysDate }) => {
  return (
    <div className={s.Wrapper}>
      <div className={s.TitleWrapper}>
        <h1 className={s.Title}>{title}</h1>
        {/* <p className={s.Dashed}></p> */}
      </div>
      {children}
      <Card cardsData={cardsData} todaysDate={todaysDate} />
    </div>
  );
};

export default Tasks;
