var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/routes')

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(8888, function () {
    console.log('Example app listening on port 8888!');
});