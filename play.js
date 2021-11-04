const {connect} = require("./client");
const client = connect();

client.on("connect", () => {
  client.write("Move: up");
})

client.on("data", (data) => {
  // code that does something when the connection is first established
  console.log(data.toString());
});


/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/