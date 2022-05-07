import React from "react";
import Card from "../Card/Card";
import s from "./Tasks.module.css";
import arrowIcon from "../../icons/arrow.svg";
import { showDoneTasksAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Tasks = ({ title, cardsData, children, todaysDate, dashed }) => {
  const dispatch = useDispatch();
  const isDoneVisible = useSelector((state) => state.isDoneVisible);

  const showDone = (e) => {
    e.preventDefault();

    isDoneVisible
      ? dispatch(showDoneTasksAction(false))
      : dispatch(showDoneTasksAction(true));

    // dispatch(showDoneTasksAction(true));
  };

  return (
    <div className={s.Wrapper}>
      <div className={s.TitleWrapper}>
        <h1 className={s.Title}>{title}</h1>
        {dashed ? (
          <>
            <img
              className={s.arrowIcon}
              src={arrowIcon}
              alt="star"
              tabIndex="1"
              onClick={showDone}></img>
            <p className={s.Dashed}></p>
          </>
        ) : (
          <></>
        )}
      </div>
      {children}
      <Card cardsData={cardsData} todaysDate={todaysDate} />
    </div>
  );
};

export default Tasks;
