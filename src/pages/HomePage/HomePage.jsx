import React from "react";
import Header from "../../components/Header/Header";
// import Card from "../../components/Card/Card";
import Tasks from "../../components/Tasks/Tasks";
import s from "./HomePage.module.css";

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
    difficulty: "medium",
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
    difficulty: "medium",
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
      <Tasks title="Today" cardsData={cardsToday} />
      <Tasks title="Tommorow" cardsData={cardsTommorow} />
      <Tasks title="Done" cardsData={cardsObj} />
    </div>
  );
};

export default Main;
