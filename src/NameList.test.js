import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import NameList from "./NameList";

test("snapshot test for NameList", () => {
  const renderer = new ShallowRenderer();
  const testNames = ["name1", "name2"];
  renderer.render(<NameList names={testNames} luckyWinnerIndex={0} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
