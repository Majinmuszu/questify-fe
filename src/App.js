// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing/Landing";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

const App = () => {
  // const user = useSelector((state) => state.currentUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Landing />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <Header />
            <HomePage />
          </>
        }
      />
      <Route
        path="/card/complete/:id"
        element={
          <>
            <Header />
            <HomePage />
          </>
        }
      />
    </Routes>
  );
};

export default App;
