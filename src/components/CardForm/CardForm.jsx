import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datePickAction, formVisibilityAction } from "../../redux/actions";
import { useAddCardMutation } from "../../services/api";
import DatePicker from "react-datepicker";
import starIcon from "../../icons/star.svg";
import calendarIcon from "../../icons/calendar.svg";
import clearIcon from "../../icons/clear.svg";
import ellipseBlue from "../../icons/ellipse-blue.svg";
import ellipseRed from "../../icons/ellipse-red.svg";
import ellipseGreen from "../../icons/ellipse-green.svg";

import "react-datepicker/dist/react-datepicker.css";
import s from "./CardForm.module.css";
import { Notify } from "notiflix";

const CardForm = () => {
  const [isDiffActive, setDiffActive] = useState(false);
  const [isCatActive, setCatActive] = useState(false);
  const [difficulty, setDifficulty] = useState("Normal");
  const [category, setCategory] = useState("Stuff");

  const dispatch = useDispatch();

  const datePick = useSelector((state) => state.datePick);

  const [addNewCard] = useAddCardMutation();

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(datePickAction(null));
    dispatch(formVisibilityAction(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDate = form.date.value;
    const date = formDate.slice(0, 10);
    const time = formDate.slice(11, 16);
    const difficulty = form.difficulty.value;
    const category = form.category.value;
    const title = form.title.value;
    const type = "task";
    if (!date) {
      Notify.failure("Please choose date");
    } else {
      addNewCard({ title, difficulty, date, time, type, category });
      dispatch(datePickAction(null));
      dispatch(formVisibilityAction(false));
    }
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className={s.date__select}
      onClick={onClick}
      ref={ref}
      value={value}
      type="button"
      name="date"
    >
      {value.slice(0, 10) || "Date"}
      <img className={s.calendar__icon} alt="calendar" src={calendarIcon}></img>
    </button>
  ));
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const dropdownDiffHandler = (e) => {
    e.preventDefault();
    isDiffActive ? setDiffActive(false) : setDiffActive(true);
  };

  const handleDiffRadio = (e) => {
    setDifficulty(e.target.id);
    setDiffActive(false);
  };

  const dropdownCatHandler = (e) => {
    e.preventDefault();
    isCatActive ? setCatActive(false) : setCatActive(true);
  };

  const handleCatRadio = (e) => {
    setCategory(e.target.id);
    setCatActive(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.header__wrapper}>
          <div className={s.level__wrapper}>
            <div>
              <button
                className={s.level__button}
                type="button"
                onClick={dropdownDiffHandler}
              >
                {difficulty === "Hard" ? (
                  <img
                    className={s.ellipse}
                    src={ellipseRed}
                    alt="star"
                    tabIndex="1"
                  ></img>
                ) : difficulty === "Normal" ? (
                  <img
                    className={s.ellipse}
                    src={ellipseGreen}
                    alt="star"
                    tabIndex="1"
                  ></img>
                ) : difficulty === "Easy" ? (
                  <img
                    className={s.ellipse}
                    src={ellipseBlue}
                    alt="star"
                    tabIndex="1"
                  ></img>
                ) : (
                  <></>
                )}
                <span className={s.level__select}>{difficulty}</span>
                <div className={s.level__arrow}></div>
              </button>
              <div className={isDiffActive ? s.level__dropdown : s.hidden}>
                <label className={s.form__easy} htmlFor="Easy">
                  Easy
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Easy"
                  name="difficulty"
                  value="easy"
                  onClick={handleDiffRadio}
                />
                <label className={s.form__normal} htmlFor="Normal">
                  Normal
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Normal"
                  name="difficulty"
                  value="normal"
                  defaultChecked
                  onClick={handleDiffRadio}
                />
                <label className={s.form__hard} htmlFor="Hard">
                  Hard
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Hard"
                  name="difficulty"
                  value="hard"
                  onClick={handleDiffRadio}
                />
              </div>
            </div>
          </div>
          <img
            className={s.star__icon}
            src={starIcon}
            alt="star"
            tabIndex="1"
          ></img>
        </div>
        <div className={s.TitleWrapper}>
          <h2 className={s.form__title}>CREATE NEW QUEST</h2>
          <input
            className={s.form__input}
            name="title"
            required
            minLength="3"
            type="text"
          ></input>
          <div className={s.date__wrapper}>
            <div>
              <DatePicker
                autoComplete="off"
                selected={datePick}
                onChange={(date) => dispatch(datePickAction(date))}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="yyyy-MM-dd HH:mm"
                minDate={new Date()}
                filterTime={filterPassedTime}
                customInput={<CustomInput />}
              />
            </div>
          </div>
        </div>
        <div className={s.bottom__wrapper}>
          <div className={s.category__wrapper}>
            <div>
              <button
                className={s.category__button}
                type="button"
                onClick={dropdownCatHandler}
              >
                <span
                  className={
                    category === "Stuff"
                      ? `${s.category__select} ${s.stuff}`
                      : category === "Work"
                      ? `${s.category__select} ${s.work}`
                      : category === "Family"
                      ? `${s.category__select} ${s.family}`
                      : category === "Health"
                      ? `${s.category__select} ${s.health}`
                      : category === "Learning"
                      ? `${s.category__select} ${s.learning}`
                      : category === "Leisure"
                      ? `${s.category__select} ${s.leisure}`
                      : s.category__select
                  }
                >
                  {category}
                </span>
                <div className={s.level__arrow}></div>
              </button>
              <div className={isCatActive ? s.category__dropdown : s.hidden}>
                <label className={s.form__category} htmlFor="Stuff">
                  Stuff
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Stuff"
                  name="category"
                  value="stuff"
                  defaultChecked
                  onClick={handleCatRadio}
                />
                <label className={s.form__category} htmlFor="Family">
                  Family
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Family"
                  name="category"
                  value="family"
                  onClick={handleCatRadio}
                />
                <label className={s.form__category} htmlFor="Health">
                  Health
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Health"
                  name="category"
                  value="health"
                  onClick={handleCatRadio}
                />
                <label className={s.form__category} htmlFor="Learning">
                  Learning
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Learning"
                  name="category"
                  value="learning"
                  onClick={handleCatRadio}
                />
                <label className={s.form__category} htmlFor="Leisure">
                  Leisure
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Leisure"
                  name="category"
                  value="leisure"
                  onClick={handleCatRadio}
                />
                <label className={s.form__category} htmlFor="Work">
                  Work
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="Work"
                  name="category"
                  value="work"
                  onClick={handleCatRadio}
                />
              </div>
            </div>
          </div>
          <div className={s.button__wrapper}>
            <button className={s.button__x} onClick={handleCancel}>
              <img alt="clear" src={clearIcon}></img>
            </button>
            <button className={s.button__create} type="submit">
              CREATE
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CardForm;
