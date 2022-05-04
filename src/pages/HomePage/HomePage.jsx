import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";
import s from "./HomePage.module.css";
// import CardForm from "../../components/CardForm/CardForm";
import { useGetCardsQuery } from "../../services/api";
import moment from "moment";

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

  const actualDate = moment().format();

  return (
    <div className={s.Container}>
      {/* <CardForm /> */}
      <Tasks
        title="Today"
        cardsData={
          data
            ? data.data.filter(
                (data) => moment(data.date).diff(actualDate, "days") === 0
              )
            : []
        }
      />
      <Tasks
        title="Tommorow"
        cardsData={
          data
            ? data.data.filter(
                (data) => moment(data.date).diff(actualDate, "days") > 0
              )
            : []
        }
      />
      <Tasks
        title="Done"
        cardsData={data ? data.data.filter((data) => data.isDone === true) : []}
      />
      <ButtonPlus />
    </div>
  );
};

export default HomePage;
