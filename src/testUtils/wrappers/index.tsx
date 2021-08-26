import { ReactChild } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react-hooks";

import { configureStore } from "../../app/store";

interface RenderWithStoreProps {
  children: ReactChild;
  preloadedState?: PreloadedState<any>;
}

export const renderWithStore = ({
  children,
  preloadedState = {},
}: RenderWithStoreProps) => {
  const store = configureStore(preloadedState);
  return {
    store,
    ...render(<Provider store={store}>{children}</Provider>),
  };
};

export const renderHookWithStore = (
  callback: () => void,
  preloadedState?: PreloadedState<any>
) => {
  const store = configureStore(preloadedState);

  const wrapper = ({ children }: { children: ReactChild }) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    ...renderHook(callback, {
      wrapper,
    }),
    store,
  };
};
