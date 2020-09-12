import React, { useState } from "react";
import logo from "./imgs/logo.svg";
import verified from "./imgs/verified.svg";
import OrderForm from "./forms/OrderForm";
import ShipmentForm from "./forms/ShipmentForm";

import "./App.sass";

function App() {
  const [orderStep, setOrderStep] = useState(0);

  const cardClasses = { 0: "firstStep", 1: "secondStep", 2: "thirdStep" };

  return (
    <div className="App">
      <header className="header">
        <div className="header__wrapper">
          <span className="header__title">Тестовое задание</span>
          <img src={logo} className="header__logo" alt="Logo" />
        </div>
      </header>
      <main className="content">
        <div className={`card card--${cardClasses[orderStep]}`}>
          <div className="card__pagination">
            <span>Доставка</span>
            <span>Оплата</span>
          </div>
          <div className="card__content">
            {orderStep === 0 ? (
              <ShipmentForm setOrderStep={setOrderStep} />
            ) : orderStep === 1 ? (
              <OrderForm setOrderStep={setOrderStep} />
            ) : (
              <div className="confirm">
                <img src={verified} alt="" />
                <h3>Спасибо!</h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
