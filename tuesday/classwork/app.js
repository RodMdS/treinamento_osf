var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var myLib = require('./myLib');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('home', {
        item: "Working..."
    })
});

app.get('/q01', function (req, res) {
  res.send('Question 01 done!');
});

app.get('/q02', function (req, res) {
    var message = myLib.q02();
    res.send("The function returned: " + message);
});

app.get('/q03/:id', function (req, res) {
    var paramId = req.params.id;
    var square = myLib.square(parseInt(paramId));
    res.send("Square of " + paramId + " = " + square);
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});