import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { mount } from "enzyme";
import RandomButton from "./RandomButton";

// 3.1 test by calling methods directly
test("should call clickHandler when onClick prop is invoked", () => {
  // arrange
  const renderer = new ShallowRenderer();
  const mockClickHandler = jest.fn();
  renderer.render(<RandomButton handleClick={mockClickHandler} />);
  const output = renderer.getRenderOutput();

  // act
  output.props.children.props.onClick();

  // assert
  expect(mockClickHandler).toHaveBeenCalledTimes(1);
  expect(output).toMatchSnapshot();
});

// 3.2 test by simulating events
test("should call clickHandler when button is clicked", () => {
  const mockClickHandler = jest.fn();
  const wrapper = mount(<RandomButton handleClick={mockClickHandler} />);

  wrapper.find("button").simulate("click");

  expect(mockClickHandler).toHaveBeenCalledTimes(1);
});
