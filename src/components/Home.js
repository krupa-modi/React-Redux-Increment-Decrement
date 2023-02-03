import React from "react";

// import useselector and usedispathc from react-redux
import { useSelector, useDispatch } from "react-redux";

// using action increment and decrement we import from action
import { incrementNum, decrementNum } from "../redux/action/action";

// import props Demo
import PropsDemo from "./PropsDemo";

const Home = () => {
  // we get the initial state using useselector from reducers
  const myState = useSelector((ele) => ele.changeTheNumber);

  // using usedispatch for call the action
  const dispatch = useDispatch();

  return (
    <>
      <PropsDemo data={{ name: "krupa" }} />
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decrementNum())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incrementNum())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
