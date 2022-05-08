import React from "react";
import ButtonGo from "../../components/ButtonGo/ButtonGo";
import s from "./Landing.module.css";
import sc from "../../utils/Container.module.css";
import {
  useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../services/api";
import { useDispatch } from "react-redux";
import { currentUserAction, tokenAction } from "../../redux/actions";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { saveTokenToSS, saveUserToSS } from "../../services/sessionStorage";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

const Landing = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  // console.log(data.data);
  const [loginUser, loginStatus] = useLoginUserMutation();
  const [registerUser] = useRegisterUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitEvent = (e) => {
    e.preventDefault();
    const formEmail = e.target.email.value;
    const formPass = e.target.password.value;
    if (!isLoading && !error) {
      const users = data.data.users;
      if (users.find(({ email }) => email === formEmail)) {
        loginUser({ email: formEmail, password: formPass }).then(
          Loading.arrows("Logging In")
        );
      } else {
        registerUser({ email: formEmail, password: formPass })
          .then(
            setTimeout(() => {
              loginUser({ email: formEmail, password: formPass });
            }, 500)
          )
          .then(Loading.arrows("Registering and Logging in"));
      }
    } else {
      Notify.failure("An error occured, try again in a while");
    }
  };

  if (loginStatus.error) {
    Loading.remove();
    Report.failure(
      "Login failure",
      `Error message: ${loginStatus.error.data.message}`,
      "Okay"
    );
  }
  // If login succesfull this function runs

  useEffect(() => {
    if (loginStatus.data) {
      const { token, user } = loginStatus.data.data;
      dispatch(tokenAction(token));
      saveTokenToSS(token);
      saveUserToSS(user.email);
      dispatch(currentUserAction(user.email));
      setTimeout(() => {
        navigate("/home");
      }, 700);
    }
  });
  useEffect(() => {
    saveTokenToSS(null);
    saveUserToSS(null);
  }, []);

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
          <form onSubmit={submitEvent}>
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
                defaultValue="zbyszek@mail.com"
              ></input>
            </div>
            <div className={s.spacer__password}>
              <label htmlFor="password" className={s} required></label>
              <input
                type="password"
                name="password"
                className={s.input}
                placeholder="Password"
                minLength="6"
                defaultValue="password2"
              ></input>
              <ButtonGo />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
