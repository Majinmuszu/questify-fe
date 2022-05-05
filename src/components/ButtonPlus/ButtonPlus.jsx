import React from "react";
import { useDispatch } from "react-redux";
import { formVisibilityAction } from "../../redux/actions";
import s from "./ButtonPlus.module.css";

const Button = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(formVisibilityAction(true));
  };
  return (
    <button type="submit" className={s.button} onClick={handleClick}>
      +
    </button>
  );
};

export default Button;
