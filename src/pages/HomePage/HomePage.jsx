import React from "react";
import Tasks from "../../components/Tasks/Tasks";
import ButtonPlus from "../../components/ButtonPlus/ButtonPlus";
import s from "./HomePage.module.css";
import { useGetCardsQuery } from "../../services/api";
import moment from "moment";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { data } = useGetCardsQuery();
  const isDoneVisible = useSelector((state) => state.isDoneVisible);
  const actualDate = moment().format();

  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <Tasks
          title="Today"
          cardsData={
            data
              ? data.data.filter(
                  (data) =>
                    moment(data.date).diff(actualDate, "days") <= 0 &&
                    !data.isDone
                )
              : []
          }
          todaysDate={"Today"}>
          
        </Tasks>
        <Tasks
          title="Tommorow"
          cardsData={
            data
              ? data.data.filter(
                  (data) =>
                    moment(data.date).diff(actualDate, "days") > 0 &&
                    !data.isDone
                )
              : []
          }
          todaysDate={"Tommorow"}
        />
        <Tasks
          title="Done"
          cardsData={
            isDoneVisible
              ? data.data.filter((data) => data.isDone === true)
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
