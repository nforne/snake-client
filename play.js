const {connect, setupInput} = require("./client");
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



const handleUserInput = function (key) {
  // your code here
  let outPut = "";
  const t = 200;
  client.on("connect", () => {
    if (key === '\u0003') {
      client.end();
      console.log("Connection terminated ......")
      process.exit();
      } else if (key === '38') {    
      setInterval(() => {client.write("Move: up")}, t);
      // client.on("connect", () => {
      // });
      } else if (key === '40') {    
      setInterval(() => {client.write("Move: down")}, t);      
      // client.on("connect", () => {
      // });
      } else if (key === '39') {    
      setInterval(() => {client.write("Move: right")}, t);
      // client.on("connect", () => {
        // });
      } else if (key === '37') {    
      setInterval(() => {client.write("Move: left")}, t);
      // client.on("connect", () => {
        // });
    }
  });

};

stdin.on("data", handleUserInput);






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