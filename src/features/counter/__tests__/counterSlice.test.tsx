import reducer, {
  increment,
  amountAdded,
  initialState,
  reset,
} from "../counterSlice";

describe("counterSlice", () => {
  test("return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("return state with +1 after increment action has ran", () => {
    expect(reducer(initialState, increment())).toEqual({
      value: 1,
    });
  });

  test("return state with +amount set after amountAdded action has ran", () => {
    expect(reducer(initialState, amountAdded(3))).toEqual({
      value: 3,
    });
  });

  test("return correct state when reset", () => {
    expect(reducer({ value: 10 }, reset())).toEqual({
      value: 0,
    });
  });
});
