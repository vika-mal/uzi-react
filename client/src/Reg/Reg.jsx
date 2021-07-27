import React, { useState } from "react";
import "./Reg.scss";
import axios from "axios";

function Reg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registration = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:3001/registration`, {
        email,
        password,
      });
      alert(response.data.message);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="container">
      <div className="registration">
        <div className="registration__header">Регистрация</div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="registration__input"
          type="text"
          placeholder="Введите имя..."
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="registration__input"
          type="password"
          placeholder="Введите пароль..."
        />
        <button
          className="btn"
          type="submit"
          onClick={() => registration(email, password)}
        >
          Регистрация
        </button>
      </div>
    </div>
  );
}

export default Reg;
