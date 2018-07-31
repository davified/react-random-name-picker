import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import App from "./App";

// use this style of mocking in ES6
import { randomInt } from "mathjs";
jest.mock("mathjs", () => {
  return {
    randomInt: jest.fn()
  };
});

let renderer;
let app;

beforeEach(() => {
  fetch.resetMocks();

  renderer = new ShallowRenderer();
  renderer.render(<App />);
  app = renderer.getMountedInstance();
});

// 2.1 render-based test
it("snapshot test for initial render of App", () => {
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});

// 2.2 state-based test
it("handleClick should update state to the integer returned by math.randomInt", () => {
  randomInt.mockReturnValue(42);

  app.handleClick();

  expect(randomInt).toHaveBeenCalledTimes(1);
  expect(app.state.luckyWinnerIndex).toEqual(42);
  expect(app.state.isLoading).toEqual(false);
});

// 2.2 state-based test
it("app should fetch an array of names on componentDidMount", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        username: "test user 1"
      },
      {
        username: "test user 2"
      }
    ])
  );

  // invoke fetch
  await app.componentDidMount();

  expect(app.state.names).toEqual(
    expect.arrayContaining(["test user 1", "test user 2"])
  );
});
