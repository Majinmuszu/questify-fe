import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

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

function App() {
  const user = useSelector((state) => state.currentUser);
  return (
    <>
      {user ? <Header /> : <></>}
      <div>
        <Tasks title="Today" cardsData={cardsTommorow} />
        <Tasks title="Tommorow" cardsData={cardsObj} />
        <Tasks title="Done" cardsData={cardsToday} />
      </div>
    </>
  );
}

export default App;
