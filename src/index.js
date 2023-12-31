import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

num.innerText = "0";

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  num.innerText = countStore.getState().toString();
};

countStore.subscribe(onChange);

const handlePlus = () => countStore.dispatch({ type: ADD });
const handleMinus = () => countStore.dispatch({ type: MINUS });

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
