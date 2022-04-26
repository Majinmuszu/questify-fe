import React from "react";
import s from "./Landing.module.css";
import sc from "../../utils/Container.module.css";

const Landing = () => {
  return (
    <div className={sc.container}>
      <h1 className={s.title}>Questify</h1>
      <p className={s.about}>
        Questify will turn your life into <br /> a thrilling game full of
        amazing <br />
        quests and exciting challenges.
      </p>
      <form method="post" className={s.form__desc}>
        <div className={s.spacer}>
          <h2 class="">Write your email to sign up or log in</h2>
        </div>
        <div className={s.spacer__email}>
          <label for="email" className={s} required></label>
          <input
            type="text"
            name="email"
            className={s.input}
            placeholder="Email"
          ></input>
        </div>
        <div className={s.spacer__password}>
          <label for="password" className={s} required></label>
          <input
            type="text"
            name="password"
            className={s.input}
            placeholder="Password"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Landing;
