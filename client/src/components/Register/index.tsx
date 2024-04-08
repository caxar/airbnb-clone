import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Отправка данных при регистарции
  const handlerSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      console.log("Успешно регистрация");
    } catch (error) {
      console.log("Ошибка регистрации");
    }
  };

  return (
    <div className="login container mx-auto px-10 mt-4 grow flex items-center justify-center">
      <div className="mb-36">
        <h2 className="login-title text-2xl font-bold text-center mb-4">
          Регистрация
        </h2>
        <form className="login-form max-w-md mx-auto " onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
