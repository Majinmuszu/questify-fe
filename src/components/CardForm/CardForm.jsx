import React, { forwardRef } from "react";
import s from "./CardForm.module.css";
import starIcon from "../../icons/star.svg";
// import ellipseRed from "../../icons/ellipse-red.svg";
import { useDispatch, useSelector } from "react-redux";
import { datePickAction, formVisibilityAction } from "../../redux/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAddCardMutation } from "../../services/api";

const CardForm = () => {
  const dispatch = useDispatch();
  const datePick = useSelector((state) => state.datePick);
  const [addNewCard] = useAddCardMutation();

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(formVisibilityAction(false));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDate = e.target.date.value;
    const date = formDate.slice(0, 10);
    const time = formDate.slice(11, 16);
    const difficulty = e.target.difficulty.value;
    const category = e.target.category.value;
    const title = e.target.title.value;
    const type = "task";
    addNewCard({ title, difficulty, date, time, type, category });
    dispatch(formVisibilityAction(false));
  };
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={s.date__input} onClick={onClick} ref={ref}>
      Choose date - icon
    </button>
  ));
  return (
    <>
      <form onSubmit={handleSubmit} className={s.CardItem}>
        <div className={s.HeaderWrapper}>
          <div className={s.levelWrapper}>
            <select
              id="diff"
              defaultValue="Normal"
              name="difficulty"
              className={s.level__select}
            >
              <option value="easy" className={s.level}>
                {/* <img src={ellipseRed} alt="star" tabIndex="1"></img> */}
                Easy
              </option>
              <option value="normal" className={s.level}>
                Normal
              </option>
              <option value="hard" className={s.level}>
                Hard
              </option>
            </select>
          </div>
          <img
            className={s.starIcon}
            src={starIcon}
            alt="star"
            tabIndex="1"
          ></img>
        </div>
        <div className={s.TitleWrapper}>
          <h2 className={s.CardTitle}>title</h2>
          <input name="title" type="text"></input>
          <DatePicker
            autoComplete="off"
            name="date"
            selected={datePick}
            onChange={(date) => dispatch(datePickAction(date))}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="yyyy-MM-dd HH:mm"
            customInput={<CustomInput />}
          />
        </div>
        <div className={s.CategoryWrapper}>
          <select
            id="cat"
            defaultValue="Stuff"
            name="category"
            className={s.CardCategory__select}
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
          <button onClick={handleCancel}>X</button>
          <button type="submit">OK</button>
        </div>
      </form>
    </>
  );
};

export default CardForm;

// const Card = ({ cardsData }) => {
//   return (
//     <>
//       <ul className={s.CardList}>
//         {cardsData.map(
//           ({
//             _id,
//             difficulty,
//             favorite,
//             title,
//             date,
//             category,
//             time,
//             type,
//           }) => (
//             <li key={_id} className={s.CardItem}>
//               <div className={s.HeaderWrapper}>
//                 <div className={s.levelWrapper}>
//                   {difficulty === "hard" ? (
//                     <img src={ellipseRed} alt="star" tabIndex="1"></img>
//                   ) : difficulty === "normal" ? (
//                     <img src={ellipseGreen} alt="star" tabIndex="1"></img>
//                   ) : difficulty === "easy" ? (
//                     <img src={ellipseBlue} alt="star" tabIndex="1"></img>
//                   ) : (
//                     <></>
//                   )}

//                   <p className={s.level}>{difficulty}</p>
//                 </div>
//                 <img
//                   className={s.starIcon}
//                   src={starIcon}
//                   alt="star"
//                   tabIndex="1"
//                 ></img>
//               </div>
//               <div className={s.TitleWrapper}>
//                 <h2 className={s.CardTitle}>{title}</h2>
//                 <h4 className={s.CardDate}>{date}</h4>
//               </div>
//               <div className={s.CategoryWrapper}>
//                 <p className={s.CardCategory}>{category}</p>
//               </div>
//             </li>
//           )
//         )}
//       </ul>
//     </>
//   );
// };
