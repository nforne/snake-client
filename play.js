const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

connect().on("data", (data) => {
  // code that does something when the connection is first established
  console.log(data.toString());
  connect().end();
});


console.log("Connecting ...");
connect();