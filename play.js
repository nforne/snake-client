const {connect} = require("./client");
const client = connect();

client.on("connect", () => {
  setInterval(() => {client.write()}, 1000);
});

client.on("data", (data) => {
  // code that does something when the connection is first established
  console.log(data.toString());
});

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


/*
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// to automate sending random but allowd signals
let ctest = false;
client.on("connect", () => {
  ctest = true;
});
client.on("end", () => {
  ctest = false;
});

const moves = ["Move: up", "Move: down","Move: left","Move: right"];
const i = Math.floor(Math.random() * 5);
let tracker = moves[0];
let t = 1000;
while(ctest) {
  client.on("connect", () => {
    if (tracker === "Move: up" && moves[i] !== "Move: down") {
      setInterval(() => client.write(moves[i]), t);
      tracker = moves[i];
      // t += 200;
    } else if (tracker === "Move: left" && moves[i] !== "Move: right") {
      setInterval(() => client.write(moves[i]), t);
      tracker = moves[i];
      // t += 200;
    } else if (tracker === "Move: down" && moves[i] !== "Move: up") {
      setInterval(() => client.write(moves[i]), t);
      tracker = moves[i];
      // t += 200;
    } else if (tracker === "Move: right" && moves[i] !== "Move: left") {
      setInterval(() => client.write(moves[i]), t);
      tracker = moves[i];
      // t += 200;
    }
  });
}
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/