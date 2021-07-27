import React, { useState } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:3001/login`, {
        email,
        password,
      });
      console.log(response.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="container">
      <div className="auth">
        <div className="auth__header">Авторизация</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth__input"
          type="text"
          placeholder="Введите имя..."
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth__input"
          type="password"
          placeholder="Введите пароль..."
        />
        <button
          className="btn"
          type="submit"
          onClick={() => auth(email, password)}
        >
          Войти
        </button>
        <button className="btn">
          <Link to="/registration">Регистрация</Link>
        </button>
      </div>
    </div>
  );
}

export default Auth;
