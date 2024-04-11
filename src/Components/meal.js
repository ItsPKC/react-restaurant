import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./meal.css";
import { Context } from "../App";
import { foods } from "../data/items";

const Meal = () => {
  const { meal, setmealModal } = useContext(Context);

  const closeModal = () => {
    setmealModal(false);
  };

  const [total, settotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    Object.keys(meal).map((foodIndex) => {
      temp = temp + foods[foodIndex]["price"] * meal[foodIndex];
      return 0;
    });
    settotal(temp);
  }, [meal]);

  return ReactDOM.createPortal(
    <div className="meal-container" onClick={closeModal}>
      <div className="meal-box">
        {Object.keys(meal).map((foodIndex, index) => {
          return <MealItem foodIndex={foodIndex} key={index.toString()} />;
        })}
        <div className="order-value">
          <div>Total Amount</div>
          <div>${total.toFixed(2)}</div>
        </div>
        <div className="modal-controller">
          <div
            onClick={() => {
              setmealModal(false);
            }}
          >
            Close
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();

              console.log(`Order is placed : $${total}`);
              alert(`Your order is placed : $${total}`);
            }}
          >
            Order
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

const MealItem = ({ foodIndex }) => {
  const food = foods[foodIndex];
  const { meal, setmeal, setmealCount, mealCount } = useContext(Context);

  const addFood = (e) => {
    e.stopPropagation();
    const temp = { ...meal };
    temp[foodIndex] = meal[foodIndex] + 1;
    setmeal(temp);
    setmealCount(mealCount + 1);
  };

  const removeFood = (e) => {
    e.stopPropagation();
    const temp = { ...meal };
    temp[foodIndex] = meal[foodIndex] - 1;
    if (temp[foodIndex] === 0) {
      delete temp[foodIndex];
    }
    setmeal(temp);
    setmealCount(mealCount - 1);
  };

  return (
    <>
      <div className="mealItem">
        <div className="mealItemDetails">
          <div>{food.name}</div>
          <div>
            <div>{`$${food.price}`}</div>
            <div>{`x${meal[foodIndex]}`}</div>
          </div>
        </div>
        <div className="mealItemManager">
          <div onClick={removeFood}>&#x2014;</div>
          <div onClick={addFood}>&#65291;</div>
        </div>
      </div>
      <div className="mealItemDivider"></div>
    </>
  );

  // return <>Test</>;
};

export default Meal;
