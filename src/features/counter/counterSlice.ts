import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Will auto generate the action name
    incremented(state) {
      // Redux toolkit uses immer under the hood
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

/* 
    Logic can be added to get any other value from another store. 
    Can also be used to fire different actions based on 
    result from counter state
*/

// export const useCounter = () => {
//   const count = useAppSelector(({ counter }) => counter.value);
//   const dispatch = useAppDispatch();

//   return { count, dispatch };
// };

export const { incremented, amountAdded, reset } = counterSlice.actions;
export default counterSlice.reducer;
