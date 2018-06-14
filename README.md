# React Random Name Picker

### Getting started
- Don't fork/clone this repo. just refer to this README for instructions
- Create react app: `npx create-react-app react-random-name-picker`
- Navigate into the directory containing your react app: `cd react-random-name-picker`
- Start react app: `npm start`

### Tasks
For this exercise, we will be doing everything inside `App.js`
- Delete all the lines in `App.js` and create a class component named `App` by yourself. Make it render `<h1>hello random name picker</h1>`
- In App, create a constructor an initialize a `this.state` object with the following value:

```js
this.state = {
  names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
  luckyWinnerIndex: null
};
```
- in `render()`, add a `h3` tag that displays the value of `this.state.luckyWinnerIndex`

- in `render()`, add a `<button>get lucky winner!</button>`

- in `render()`, add an event handler to the button (the handler function can be called `handleClick()`)

- In the method `handleClick()`, set `this.state.luckyWinnerIndex` to a hard-coded number (e.g. 2). Click the button and verify that a name is displayed.

- Update the method `handleClick()` to generate a random integer. 
  - we will use a javascript library (`mathjs`) to help us with this. to use it:
    - `npm install mathjs`
    - in `App.js`, `import math from "mathjs"`
    - to generate a random integer between 0 - 2, use `math.randomInt(3)` (see [docs](http://mathjs.org/docs/reference/functions/randomInt.html))


Bonus tasks:
- Instead of displaying one name, display all names and add CSS to make the luckyWinner look different (e.g. bold and coloured) 
- Create a InputForm component allow user to key in names. Everytime the user clicks the submit button or hits enter, `setState()` should be called and `this.state.names` should be updated with a new name. Note 2 things:
  - this is only in memory, meaning everytime you refresh the page, the added names will disappear)
  - you will need to pass handlers as props
- Refactor App.js into smaller components (we will need to pass handlers as props)



prerequisite knowledge:
- basic React
- conditional rendering
- CSS
- event listeners and handlers
- passing handlers as props