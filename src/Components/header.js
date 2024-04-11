import React, { useContext } from "react";
import { Context } from "../App";
import "./header.css";
import cart from "../assets/cart.svg";

const Header = () => {
  const { mealCount, setmealModal } = useContext(Context);

  return (
    <div className="header-container">
      <div className="header-title">ReactMeals</div>
      <div className="cart-container">
        <div
          className="cart"
          onClick={() => {
            setmealModal(true);
          }}
        >
          <img className="cart-logo" src={cart} alt="" height="20px"></img>
          <div>Your Cart</div>
          <div className="item-count">{mealCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
