import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login container mx-auto px-10 mt-4 grow flex items-center justify-center">
      <div className="mb-36">
        <h2 className="login-title text-2xl font-bold text-center mb-4">
          Регистрация
        </h2>
        <form className="login-form max-w-md mx-auto ">
          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Ваш email" />
          <input type="password" placeholder="Ваш пароль" />
          <button className="login-form__btn">Продолжить</button>
          <div className="text-center py-2">
            Уже есть аккаунт?
            <Link className="underline text-black pl-1" to={`/login`}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
