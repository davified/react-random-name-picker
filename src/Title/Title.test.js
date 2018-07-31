import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Title from "./Title";

test("snapshot test for Title", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Title />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
