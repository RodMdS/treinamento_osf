var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded( {extended: true} ));

app.get('/q01', function (req, res) {
    request('https://reqres.in/api/users?page=2', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q02', function(req, res) {
    request('https://reqres.in/api/users/2', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q03', function(req, res) {
    request('https://reqres.in/api/unknown', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q04', function(req, res) {
    request('https://reqres.in/api/unknown/2', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q05', function(req, res) {
    request('https://reqres.in/api/users?delay=3', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q06', function(req, res) {
    request('https://reqres.in/api/users/23', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q07', function(req, res) {
    request('https://reqres.in/api/unknown/23', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/q08', function(req, res) {
    request('https://reqres.in/api/users', function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/form', function(req, res) {
    res.render('form');
});

app.post('/form', function(req, res) {
    var postData = {
        "name": req.body.name,
        "job": req.body.job
    };
    request.post({
        uri:'https://reqres.in/api/users',
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)
        }, 
        function(error, response, body) {
        console.log(body);
        console.log(response.statusCode);
        res.send(body);
    });
});

app.get('/form2', function(req, res) {
    res.render('form2');
});

app.post('/form2', function(req, res) {
    var postData = {
        "email": req.body.email,
        "password": req.body.password
    };
    request.post({
        uri:'https://reqres.in/api/login',
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)
        }, 
        function(error, response, body) {
        console.log(body);
        console.log(response.statusCode);
        res.send(body);
    });
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});