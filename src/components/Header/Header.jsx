import React from "react";
import s from "./Header.module.css";
import logoutIcon from "../../icons/logout.svg";
import UserName from "../UserName/UserName";
import { useLazyLogoutUserQuery } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAction } from "../../redux/actions";
import { useNavigate } from "react-router";
import { tokenAction } from "../../redux/actions";
import {
  loadTokenFromSS,
  loadUserFromSS,
  saveTokenToSS,
  saveUserToSS,
} from "../../services/sessionStorage";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const Header = () => {
  Loading.remove();
  const currentUser =
    useSelector((state) => state.currentUser) || loadUserFromSS() || null;
  const authToken = useSelector((state) => state.authToken);
  const [logoutTrigger] = useLazyLogoutUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!authToken) {
    dispatch(tokenAction(loadTokenFromSS()));
  }

  const uInitial = currentUser[0].toUpperCase();
  const uName = currentUser
    .slice(0, currentUser.indexOf("@"))
    .replace(/^./, currentUser[0].toUpperCase());

  const logout = (e) => {
    e.preventDefault();
    logoutTrigger();
    saveTokenToSS(null);
    saveUserToSS(null);
    dispatch(currentUserAction(null));
    dispatch(tokenAction(null));
    Notify.info("Logged out");
    navigate("/");
  };

  return (
    <header className={s.header}>
      <h2 className={s.logo}>Questify</h2>
      <UserName userInitial={uInitial} userName={uName} />
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
