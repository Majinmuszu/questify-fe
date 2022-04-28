import React from "react";
import Button from "../../components/Button/Button";
import s from "./Landing.module.css";
import sc from "../../utils/Container.module.css";

const Landing = () => {
  return (
    <div className={s.landing}>
      <div className={s.position}>
        <div className={sc.container}>
          <h1 className={s.title}>Questify</h1>
          <p className={s.about}>
            Questify will turn your life into <br /> a thrilling game full of
            amazing <br />
            quests and exciting challenges.
          </p>
          <form method="post">
            <div className={s.spacer}>
              <h2 className={s.form__desc}>
                Write your email to sign up or log in
              </h2>
            </div>
            <div className={s.spacer__email}>
              <label htmlFor="email" className={s} required></label>
              <input
                type="text"
                name="email"
                className={s.input}
                placeholder="Email"
              ></input>
            </div>
            <div className={s.spacer__password}>
              <label htmlFor="password" className={s} required></label>
              <input
                type="text"
                name="password"
                className={s.input}
                placeholder="Password"
              ></input>
              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
