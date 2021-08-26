import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, amountAdded, reset } from "./counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(({ counter }) => counter.value);

  return (
    <>
      <p data-testid="count">Count is: {count}</p>
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <button onClick={() => dispatch(amountAdded(3))}>+ 3</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
