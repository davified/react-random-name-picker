import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import LoadingIcon from "./LoadingIcon";

test("snapshot test for LoadingIcon", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<LoadingIcon/>);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});