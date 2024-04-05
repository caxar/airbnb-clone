const express = require("express");
const app = express();

app.get("/test", function (req, res) {
  res.json("Hello World");
});

app.listen(6200);
