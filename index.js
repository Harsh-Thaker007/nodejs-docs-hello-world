const express = require("express");
const app = express();
const port = process.env.PORT || 1337;
app.use(express.static("website"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/website/index.html"));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log("Server Started");
});
