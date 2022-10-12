const express = require("express");
const app = express();
const port = process.env.PORT || 1337;
// app.use(express.static("website"));

app.get("/", (req, res) => {
  //   res.sendFile(
  //     path.join(__dirname.replace("controllers", "/website/index.html"))
  //   );
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  console.log("Server Started");
});
