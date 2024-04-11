/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAuthUser } from "../../redux/authUser/authUserSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState<boolean>(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const userInfo = await axios.post("/login", { email, password });
      console.log("Успешный вход");
      // При успешном входе в redux добавляем информацию о пользователе
      dispatch(setAuthUser(userInfo));
      setRedirect(true);
    } catch (error) {
      console.log("Ошибка входа");
    }
  };

  // Если успешный вход редирект на главную страницу
  if (redirect) return <Navigate to={"/"} />;

  return (
    <div className="login container mx-auto px-10 mt-4 grow flex items-center justify-center">
      <div className="mb-36">
        <h2 className="login-title text-2xl font-bold text-center mb-4">
          Вход
        </h2>
        <form className="login-form max-w-md mx-auto " onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ваш email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ваш пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-form__btn">Продолжить</button>
          <div className="text-center py-2">
            Ещё нет аккаунта?
            <Link className="underline text-black pl-1" to={`/register`}>
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
