import React from "react";
import s from "./ButtonPlus.module.css";

const Button = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The link was clicked.");
  };
  return (
    <div className={s.buttonWrapper}>
      <button type="submit" className={s.button} onClick={handleClick}>
        +
      </button>
    </div>
  );
};

export default Button;
