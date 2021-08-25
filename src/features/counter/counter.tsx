import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented, amountAdded, reset } from "./counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(({ counter }) => counter.value);

  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={() => dispatch(incremented())}>+ 1</button>
      <button onClick={() => dispatch(amountAdded(3))}>+ 3</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
