import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";
import s from "./HomePage.module.css";
import { useGetCardsQuery } from "../../services/api";
import moment from "moment";
import { useSelector } from "react-redux";
import CardForm from "../../components/CardForm/CardForm";

const HomePage = () => {
  const { data } = useGetCardsQuery();
  const isFormVisible = useSelector((state) => state.isFormVisible);
  const isDoneVisible = useSelector((state) => state.isDoneVisible);
  const actualDate = moment().format("YYYY-MM-DD HH:MM");

  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <Tasks
          title="Today"
          children={isFormVisible ? <CardForm /> : null}
          cardsData={
            data
              ? data.data
                  .filter(
                    (data) =>
                      moment(data.date).diff(actualDate, "days", true) <= 0 &&
                      moment(data.date).diff(actualDate, "days", true) >= -1 &&
                      !data.isDone
                  )
                  .sort((a, b) => a.time.localeCompare(b.time))
              : []
          }
          todaysDate={"Today"}></Tasks>
        <Tasks
          title="Tommorow"
          cardsData={
            data
              ? data.data
                  .filter(
                    (data) =>
                      moment(data.date).diff(actualDate, "days", true) > 0 &&
                      moment(data.date).diff(actualDate, "days", true) <= 1 &&
                      !data.isDone
                  )
                  .sort((a, b) => a.time.localeCompare(b.time))
              : []
          }
          todaysDate={"Tommorow"}
        />
        <Tasks
          title="Future"
          cardsData={
            data
              ? data.data
                  .filter(
                    (data) =>
                      moment(data.date).diff(actualDate, "days", true) > 1 &&
                      !data.isDone
                  )
                  .sort((a, b) => a.date.localeCompare(b.date))
              : []
          }
        />
        <Tasks
          title="Done"
          cardsData={
            isDoneVisible
              ? data.data
                  .filter((data) => data.isDone === true)
                  .sort((a, b) => b.date.localeCompare(a.date))
              : []
          }
          dashed={true}
        />
        <ButtonPlus />
      </div>
    </div>
  );
};

export default HomePage;
