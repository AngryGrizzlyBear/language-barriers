const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 5999;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
