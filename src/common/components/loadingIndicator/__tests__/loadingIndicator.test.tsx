import { render } from "@testing-library/react";

import LoadingIndicator from "../loadingIndicator";

describe("<LoadingIndicator />", () => {
  it("render with correct text", () => {
    const { getByTestId } = render(<LoadingIndicator />);

    const loadingIndicatorText = getByTestId("loading-indicator-text");

    expect(loadingIndicatorText).toBeInTheDocument();
    expect(loadingIndicatorText).toHaveTextContent("Loading...");
  });
});
