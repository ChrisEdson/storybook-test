import "react";
import { render } from "@testing-library/react-native";

import { HeadlineFive } from "./DesignSystemHeadlineFive";

describe("DesignSystemHeadlineFive", () => {
  it("renders text correctly", () => {
    expect(
      render(<HeadlineFive>Test</HeadlineFive>).toJSON()
    ).toMatchSnapshot();
  });
});
