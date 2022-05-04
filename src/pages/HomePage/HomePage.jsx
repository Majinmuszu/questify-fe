import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";
import s from "./HomePage.module.css";
// import CardForm from "../../components/CardForm/CardForm";

const cardsToday = [
  {
    id: 1,
    title: "test title",
    difficulty: "hard",
    category: "family",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
  {
    id: 2,
    title: "test title",
    difficulty: "hard",
    category: "work",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
  {
    id: 3,
    title: "test title",
    difficulty: "hard",
    category: "learning",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
];
const cardsTommorow = [
  {
    id: 1,
    title: "test title",
    difficulty: "normal",
    category: "learning",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
  {
    id: 2,
    title: "test title",
    difficulty: "easy",
    category: "family",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
  {
    id: 3,
    title: "test title",
    difficulty: "hard",
    category: "learning",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
];
const cardsObj = [
  {
    id: 1,
    title: "test title",
    difficulty: "hard",
    category: "learning",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
  {
    id: 2,
    title: "test title",
    difficulty: "normal",
    category: "learning",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
  {
    id: 3,
    title: "test title",
    difficulty: "easy",
    category: "learning",
    date: "2029-12-31",
    time: "20:30",
    type: "task",
  },
];

const Main = () => {
  return (
    <div className={s.Container}>
      {/* <CardForm /> */}
      <Tasks title="Today" cardsData={cardsToday} />
      <Tasks title="Tommorow" cardsData={cardsTommorow} />
      <Tasks title="Done" cardsData={cardsObj} />
      <ButtonPlus />
    </div>
  );
};

export default Main;
