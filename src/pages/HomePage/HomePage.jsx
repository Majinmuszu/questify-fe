import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";
import s from "./HomePage.module.css";
import CardForm from "../../components/CardForm/CardForm";
import { useGetCardsQuery } from "../../services/api";
import moment from "moment";
import { useSelector } from "react-redux";

// const cardsTommorow = [
//   {
//     _id: 1,
//     title: "test title",
//     difficulty: "normal",
//     category: "learning",
//     date: "2029-12-31",
//     time: "20:30",
//     type: "task",
//   },
//   {
//     _id: 2,
//     title: "test title",
//     difficulty: "easy",
//     category: "family",
//     date: "2029-12-31",
//     time: "20:30",
//     type: "task",
//   },
//   {
//     _id: 3,
//     title: "test title",
//     difficulty: "hard",
//     category: "learning",
//     date: "2029-12-31",
//     time: "20:30",
//     type: "task",
//   },
// ];

const HomePage = () => {
  const { data } = useGetCardsQuery();
  const isFormVisible = useSelector((state) => state.isFormVisible);
  const actualDate = moment().format();

  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <Tasks
          title="Today"
          cardsData={
            data
              ? data.data.filter(
                  (data) => moment(data.date).diff(actualDate, "days") === 0
                )
              : []
          }
          todaysDate={"Today"}>
          {isFormVisible ? <CardForm /> : null}
        </Tasks>
        <Tasks
          title="Tommorow"
          cardsData={
            data
              ? data.data.filter(
                  (data) => moment(data.date).diff(actualDate, "days") > 0
                )
              : []
          }
          todaysDate={"Tommorow"}
        />
        <Tasks
          title="Done"
          cardsData={
            data ? data.data.filter((data) => data.isDone === true) : []
          }
        />
        <ButtonPlus />
      </div>
    </div>
  );
};

export default HomePage;
