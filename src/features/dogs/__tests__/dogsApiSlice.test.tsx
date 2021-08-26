import { renderHookWithStore } from "../../../testUtils/wrappers";
import reducer, { useFetchBreedsQuery } from "../dogsApiSlice";

describe("dogsApiSlice", () => {
  it("return fetched dogs", async () => {
    const { store, waitForNextUpdate } = renderHookWithStore(() =>
      useFetchBreedsQuery()
    );

    await waitForNextUpdate();
    const storeFetchedDogs = store.getState().api;
    // TODO: WIP
  });
});
