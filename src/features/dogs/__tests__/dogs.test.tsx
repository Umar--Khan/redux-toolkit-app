import { render } from "@testing-library/react";

import { renderWithStore } from "../../../testUtils/wrappers";
import Dogs from "../dogs";
import * as DogsApiSlice from "../dogsApiSlice";

const mockData: DogsApiSlice.Breed[] = [
  {
    id: "123",
    name: "Dog name",
    image: {
      url: "imageUrl",
    },
  },
  {
    id: "123414",
    name: "Pitbull",
    image: {
      url: "hostedurl",
    },
  },
];

describe("<Dogs />", () => {
  it("renders loading indicator", () => {
    const { getByTestId } = renderWithStore({
      children: <Dogs />,
    });

    expect(getByTestId("loading-indicator-text")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    jest.spyOn(DogsApiSlice, "useFetchBreedsQuery").mockReturnValue({
      data: mockData,
    });

    const { queryByTestId, getAllByTestId } = render(<Dogs />);

    expect(queryByTestId("loading-indicator-text")).not.toBeInTheDocument();
    expect(getAllByTestId("dog-breed")).toHaveLength(2);
  });
});
