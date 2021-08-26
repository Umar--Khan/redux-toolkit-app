import { fireEvent } from "@testing-library/react";
import { renderWithStore } from "../../../testUtils/wrappers";
import Counter from "../counter";
import { initialState } from "../counterSlice";

describe("<Counter />", () => {
  test("Renders", () => {
    const { getByText, getByTestId } = renderWithStore({
      children: <Counter />,
      preloadedState: { counter: initialState },
    });

    const count = getByTestId("count");

    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("0");

    expect(getByText("Reset")).toBeInTheDocument();
    expect(getByText("+ 1")).toBeInTheDocument();
    expect(getByText("+ 3")).toBeInTheDocument();
  });

  test("Count is increased by 1", () => {
    const { getByText, getByTestId } = renderWithStore({
      children: <Counter />,
      preloadedState: { counter: initialState },
    });

    const count = getByTestId("count");
    expect(count).toHaveTextContent("0");

    fireEvent.click(getByText("+ 1"));

    expect(count).toHaveTextContent("1");
  });

  test("Count is increased by 3", () => {
    const { getByText, getByTestId } = renderWithStore({
      children: <Counter />,
      preloadedState: { counter: initialState },
    });

    const count = getByTestId("count");
    expect(count).toHaveTextContent("0");

    fireEvent.click(getByText("+ 3"));

    expect(count).toHaveTextContent("3");
  });

  test("Count is reset", () => {
    const { getByText, getByTestId } = renderWithStore({
      children: <Counter />,
      preloadedState: { counter: { value: 9 } },
    });

    const count = getByTestId("count");
    expect(count).toHaveTextContent("9");

    fireEvent.click(getByText("Reset"));

    expect(count).toHaveTextContent("0");
  });
});
