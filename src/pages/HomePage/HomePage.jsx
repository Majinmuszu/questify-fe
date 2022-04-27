import React from "react";
import Header from "../../components/Header/Header";
// import Card from "../../components/Card/Card";
import Tasks from "../../components/Tasks/Tasks";
import s from "./HomePage.module.css";

const cardsToday = [
  {
    id: 1,
    level: "Hard",
    favorite: false,
    cardTitle: "Finish something",
    date: "March 07 2022",
    category: "WORK",
  },
  {
    id: 2,
    level: "easy",
    favorite: true,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "FAMILY",
  },
  {
    id: 3,
    level: "Easy",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "leisure",
  },
];
const cardsTommorow = [
  {
    id: 1,
    level: "Hard",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "WORK",
  },
  {
    id: 2,
    level: "Medium",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "FAMILY",
  },
  {
    id: 3,
    level: "Easy",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "leisure",
  },
];
const cardsObj = [
  {
    id: 1,
    level: "Hard",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "WORK",
  },
  {
    id: 2,
    level: "Medium",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "FAMILY",
  },
  {
    id: 3,
    level: "Easy",
    favorite: false,
    cardTitle: "Finish report",
    date: "March 07 2022",
    category: "leisure",
  },
];

const Main = () => {
  return (
    <div className={s.Container}>
      <Tasks title="Today" cardsData={cardsToday} />
      <Tasks title="Tommorow" cardsData={cardsTommorow} />
      <Tasks title="Done" cardsData={cardsObj} />
      {/* <Card /> */}
    </div>
  );
};

export default Main;
