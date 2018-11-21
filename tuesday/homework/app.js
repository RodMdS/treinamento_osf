var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var auxiliarFunctions = require('./auxiliarFunctions');

/* how can i request with node.js */

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/q01/:number', function (req, res) {
  var numberParameter = req.params.number;
  res.render('q01', {
    number: numberParameter,
    result: auxiliarFunctions.isEven(numberParameter)
  })
});

app.get('/q02', function(req, res) {
  res.render('q02', {
    randomNumber: auxiliarFunctions.generateRandomNumber()
  })
});

app.get('/q03/:number', function(req, res) {
  var number = req.params.number;
  if(number < 5) {
    res.render('q03', {
      number: number
    })
  } else {
    res.send("<h3> Just printing " + number + ".</h3>")
  }
});

app.get('/q04', function(req, res) {
  res.render('q04', {
    array: [0,1,2,3,4,5,6,7,8,9]
  })
});

app.listen(3050, function () {
  console.log('Example app listening on port 3050!');
});