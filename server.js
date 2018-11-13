var express = require('express');
var app = express();
var path = require('path')
var PORT = "8080";
var HOST = "127.0.0.1";

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", 'ejs');

app.get('/', function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  return console.log('server up');
});
