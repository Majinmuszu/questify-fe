import React from "react";
import s from "./Header.module.css";
import logoutIcon from "../../icons/logout.svg";
import UserName from "../UserName/UserName";
import { useLazyLogoutUserQuery } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAction } from "../../redux/actions";
const Header = () => {
  const user = useSelector((state) => state.currentUser);
  const [logoutTrigger] = useLazyLogoutUserQuery();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(currentUserAction(null));
    logoutTrigger();
    console.log(user);
  };
  console.log(user);
  return (
    // TODO Add react-router logic when logout
    <header className={s.header}>
      <h2 className={s.logo}>Questify</h2>
      <UserName />
      <button className={s.logoutButton} onClick={() => logout()}>
        <img
          className={s.logout}
          src={logoutIcon}
          alt="logout icon"
          tabIndex="1"
        ></img>
      </button>
    </header>
  );
};

export default Header;
