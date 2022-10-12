const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname.replace("controllers", "/website/index.html")));
  res.send("Hello WOlrd There is no pronlem with router");
});

module.exports = router;
