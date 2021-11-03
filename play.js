const {connect} = require("./client");

// connect().on("data", (data) => {
//   // code that does something when the connection is first established
//   console.log(data.toString());
// });

// connect().end();
// console.log("Connecting ...");
// connect()

connect().on("event", (event) => {
  // code that does something when the connection is first established
  console.log(event);
});