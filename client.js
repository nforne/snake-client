const net = require("net");
const {IP, PORT} = require("./constants")

// establishes a connection with the game server
const connect = function () {
  const client = net.createConnection({IP, PORT}/*{
    host: "165.227.47.243", // IP address here,
    port: "50541" // PORT number here,
  }*/);

  // interpret incoming data as text
  client.setEncoding("utf8");

  console.log("Connecting ...");
  client.on("connect", () => {
    console.log("Successfully connected to game server");
    client.write("Name: wnf");
  })

  return client;
};



module.exports = {connect};