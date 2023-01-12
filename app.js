const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:date", (req, res) => {
  let input = req.params.date;
  if (/^[0-9]*$/.test(input)) {
    input = +input;
  }
  const date = new Date(input).toString();
  const unix = Date.parse(date);
  res.json({ unix, utc: date });
});

app.listen(3000, console.log("server started..."));
