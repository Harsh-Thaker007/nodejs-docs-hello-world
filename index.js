const express = require("express");
const app = express();
const routes = require("./controllers/route")
const port = process.env.PORT || 1337;
app.use("/", routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log("Server Started");
});

