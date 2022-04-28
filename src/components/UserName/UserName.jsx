import React from "react";
import { useSelector } from "react-redux";
import s from "./UserName.module.css";
const UserName = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userInitial = currentUser[0].toUpperCase();
  const userName = currentUser
    .slice(0, currentUser.indexOf("@"))
    .replace(/^./, currentUser[0].toUpperCase());
  return (
    <div className={s.userWrapper}>
      <div className={s.letterCircle}>
        <span className={s.userLetter}>{userInitial}</span>
      </div>
      <p className={s.userName}>{userName}'s Quest Log</p>
    </div>
  );
};

export default UserName;
