import React from "react";
import s from "./Header.module.css";
import logoutIcon from "../../icons/logout.svg";
import UserName from "../UserName/UserName";
import { useLazyLogoutUserQuery } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAction } from "../../redux/actions";
import { useNavigate } from "react-router";
import { tokenAction } from "../../redux/actions";
import { saveTokenToSS } from "../../services/sessionStorage";
const Header = () => {
  const [logoutTrigger] = useLazyLogoutUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    logoutTrigger();
    saveTokenToSS(null);
    dispatch(currentUserAction(null));
    dispatch(tokenAction(null));
    navigate("/");
  };
  return (
    <header className={s.header}>
      <h2 className={s.logo}>Questify</h2>
      <UserName />
      <button className={s.logoutButton} onClick={logout}>
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
