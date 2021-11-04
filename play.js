const {connect} = require("./client");
const {setupInput, handleUserInput} = require("./input")
const client = connect();
const stdin = setupInput();

client.on("connect", () => {
  setInterval(() => {client.write()}, 1000);
});

client.on("data", (data) => {
  // code that does something when the connection is first established
  console.log(data.toString());
});

// setup interface to handle user input from stdin

stdin.on("data", handleUserInput);
