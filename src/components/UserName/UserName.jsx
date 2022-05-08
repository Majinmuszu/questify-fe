import React from "react";
import s from "./UserName.module.css";
const UserName = ({userInitial, userName}) => {
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
