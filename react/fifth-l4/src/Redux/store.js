import { createStore } from "redux";

let inState = {
  todos: [],
  display: null
};

const appReducer = (state = inState, action) => {
  let copy = { ...state };
  console.log("action", action.payload);
  switch (action.type) {
    case "change":
      copy.todos = [...copy.todos, action.payload];
      return copy;

    case "display":
      copy.display = action.payload;
      return copy;

    default:
      return copy;
  }
};

let store = createStore(appReducer);

export default store;
