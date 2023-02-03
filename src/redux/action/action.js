// create function using action creator

// for increment
export const incrementNum = () => {
  return {
    type: "INCREMENT",
  };
};

// for decrement
export const decrementNum = () => {
  return {
    type: "DECREMENT",
  };
};
