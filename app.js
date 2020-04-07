/* eslint-disable no-undef */
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var moneyRouter = require("./routes/moneys");
var piggyBankRouter = require("./routes/piggyBank");
var loginRouter = require("./routes/login");
var accountRouter = require("./routes/account");


var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/PiggyBankDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connect");
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/moneys", moneyRouter);
app.use("/piggyBanks", piggyBankRouter);
app.use("/account", accountRouter);
app.use("/login", loginRouter);


module.exports = app;
