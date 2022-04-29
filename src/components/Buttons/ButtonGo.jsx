import React from "react";
import s from "./ButtonPlus.module.css";

const Button = () => {
  return (
    <div className={s.buttonWrapper}>
      <button type="submit" className={s.button}>
        go!
      </button>
    </div>
  );
};

export default Button;
