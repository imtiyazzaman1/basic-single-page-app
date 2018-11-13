var express = require('express');
var app = express();
var PORT = "8080";
var HOST = "127.0.0.1";

app.set("view engine", 'ejs');

app.get('/', function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  return console.log('server up');
});
