const express = require("express");
const app = express();
const cors = require("cors");

const MESSAGE = "v1";

app.use(cors());

app.get("/", (req, res) => {
  res.send(MESSAGE);
});

app.listen(5001, () => {
  console.log("listening on *:5001");
});
