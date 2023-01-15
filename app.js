const express = require("express");
const apiRouter = require("./router");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api", apiRouter);
app.use((_req, res) => {
  res.send('<h1 style="text-align: center;text-transform: capitalize; margin-top: 2rem">404 ! page not found</h1>');
});

module.exports = app;
