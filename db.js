const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("connected successfully to db");
  app.listen(port, console.log(`server started at port ${port}...`));
});
