const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 1337;

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello World!");
// });

// console.log("Server running at http://localhost:%d", port);

app.get("/", (req,res) => {
  res.send("Welcome to the server");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log("Server Started");
});
