const express = require("express");
const app = express();
const routes = require("./controllers/route");
const http = require("http");
const port = process.env.PORT || 1337;

app.use("/", routes);

var server = http.createServer(app).listen(port);
