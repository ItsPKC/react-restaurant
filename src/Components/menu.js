import React, { useEffect, useRef, useContext } from "react";
import "./menu.css";
import { foods } from "../data/items";
import { Context } from "../App";

const Menu = () => {
  return (
    <div className="menu-container">
      {foods.map((food, index) => {
        return <Food food={food} index={index} key={index.toString()} />;
      })}
    </div>
  );
};

const Food = ({ food, index }) => {
  const amount = useRef();
  const { meal, setmeal, mealCount, setmealCount } = useContext(Context);
  const addMeal = () => {
    const temp = { ...meal };
    temp[index] = (meal[index] ?? 0) + +amount.current.value;
    setmeal(temp);
    setmealCount(mealCount + +amount.current.value);
  };
  useEffect(() => {
    amount.current.value = 1;
  }, []);

  return (
    <>
      <div className="food">
        <div className="food-details">
          <div>{food.name}</div>
          <div>{food.description}</div>
          <div>{`$${food.price}`}</div>
        </div>
        <div className="quantity-controller">
          <div>
            Amount
            <input type="number" min={1} ref={amount} />
          </div>
          <div onClick={addMeal}>+Add</div>
        </div>
      </div>
      {index < foods.length - 1 && <div className="divider"></div>}
    </>
  );
};

export default Menu;
