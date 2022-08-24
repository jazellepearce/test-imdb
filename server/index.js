require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const config = require("./config/key");
const mongoose = require("mongoose");
const session = require("express-session");

const connect = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser());

app.use("/api/user", require("./routes/users"));
// app.use("/api/comment", require("./routes/comment"));
// app.use("/api/like", require("./routes/like"));
// app.use("/api/favorite", require("./routes/favorite"));
app.use("/api/movie", require("./routes/movie"));

app.get("*", function (req, res) {
  res.status(404).send("You are in the wrong place");
});

const port = process.env.port || 5001;

app.listen(port, () => {
  console.log(`Sever Running at ${port}`);
});
