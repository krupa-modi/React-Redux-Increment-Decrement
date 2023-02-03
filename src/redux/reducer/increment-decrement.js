// create variable for initialstate
const initialstate = 0;

// create function with atate and action as a argument
const changeTheNumber = (state = initialstate, action) => {
  // using switch case
  switch (
    action.type // which action to be perform
  ) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

// it is reusable so export it and use every component
export default changeTheNumber;
