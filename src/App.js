import React, { useState, createContext } from "react";
import Header from "./Components/header";
import Menu from "./Components/menu";
import Meal from "./Components/meal";

export const Context = createContext();

const App = () => {
  const [meal, setmeal] = useState({}); // Store data in the form of "index : amount" (In reality amount is quantity)
  const [mealCount, setmealCount] = useState(0);
  const [mealModal, setmealModal] = useState(false);
  return (
    <Context.Provider
      value={{ meal, setmeal, setmealModal, mealCount, setmealCount }}
    >
      {mealModal && <Meal />}
      <Header />
      <Menu />
    </Context.Provider>
  );
};

export default App;
