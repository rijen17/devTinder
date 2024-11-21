var express = require("express");
var app = express();

app.use("/home", (req, res) => {
  res.send("Home");
});

app.listen(7000, () => {
  console.log("Server is listening at 7000");
});
