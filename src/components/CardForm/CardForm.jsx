import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datePickAction, formVisibilityAction } from "../../redux/actions";
import { useAddCardMutation } from "../../services/api";
import DatePicker from "react-datepicker";
import starIcon from "../../icons/star.svg";
import calendarIcon from "../../icons/calendar.svg";
import clearIcon from "../../icons/clear.svg";
import "react-datepicker/dist/react-datepicker.css";
import s from "./CardForm.module.css";
import { Notify } from "notiflix";

const CardForm = () => {
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
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.header__wrapper}>
          <div className={s.level__wrapper}>
            <div>
              <button className={s.level__button}>
                <span className={s.level__select}>Easy</span>
                <div className={s.level__arrow}></div>
              </button>
              <div className={s.level__dropdown}>
                <label className={s.form__easy} for="easy">
                  Easy
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="easy"
                  name="easy"
                  value="easy"
                />
                <label className={s.form__normal} for="normal">
                  Normal
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="normal"
                  name="normal"
                  value="normal"
                />
                <label className={s.form__hard} for="easy">
                  Hard
                </label>
                <input
                  className={s.option}
                  type="radio"
                  id="hard"
                  name="hard"
                  value="hard"
                />
              </div>
            </div>
            {/* <select
              id="diff"
              defaultValue="normal"
              name="difficulty"
              className={s.level__select}
            >
              <option value="easy" className={s.level__easy}>
                Easy
              </option>
              <option value="normal" className={s.level__normal}>
                Normal
              </option>
              <option value="hard" className={s.level__hard}>
                Hard
              </option>
            </select> */}
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
            {/* <h2 className={s.date}>{dateInfo}</h2> */}
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
            <select
              id="cat"
              defaultValue="stuff"
              name="category"
              className={s.category__select}
            >
              <option value="stuff" className={s.level}>
                Stuff
              </option>
              <option value="family" className={s.level}>
                Family
              </option>
              <option value="health" className={s.level}>
                Health
              </option>
              <option value="learning" className={s.level}>
                Learning
              </option>
              <option value="leisure" className={s.level}>
                Leisure
              </option>
              <option value="work" className={s.level}>
                Work
              </option>
            </select>
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
