var request = require('request');

exports.index = function (req, res) {
    res.render('home');
};

exports.getAllContacts = function (req, res) {
    request('https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts', 
    function(error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        if(response.statusCode == 200) {
            var obj = JSON.parse(body);
            // console.log(obj);
            res.render('listPage', {
                contacts: obj
            })
        } else res.render('error');
    });
};

exports.getRegister = function (req, res) {
    res.render('registerPage', {contact: null});
};

exports.postRegister = function(req, res) {
    var postData = {
        "name": req.body.fname,
        "email": req.body.email,
        "phone": req.body.phone,
        "gender": req.body.gender
    };
    request.post({
        url: 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts',
        method: "POST", json: postData}, 
        function(error, response, body) {
        console.log(response.statusCode);
        if(response.statusCode == 200) res.redirect('/list');
        else res.render('error');
    });
};

exports.getFind = function (req, res) {
    res.render('searchPage');
};

exports.postFind = function(req, res) {
    var id = req.body.id;
    request('https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/' + id, 
        function(error, response, body) {
        // console.log(body);
        console.log(response.statusCode);
        var obj = JSON.parse(body);
        console.log(obj);
        res.render('listPage', {contacts: [obj]})
    });
};

exports.delete = function(req, res) {
    var id = req.body.id;
    request.delete({
        url: 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/' + id,
        method: "DELETE"
        },
        function(error, response, body) {
        // console.log(body);
        console.log(response.statusCode);
        var obj = JSON.parse(body)
        if(response.statusCode == 200) res.redirect('/list')
        else res.render('error');
    });
};

exports.update = function(req, res) {
    var id = req.body.id;
    request.get({
        url: 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/' + id,
        method: "GET"
        },
        function(error, response, body) {
        console.log(body);
        console.log(response.statusCode);
        var obj = JSON.parse(body);
        if(response.statusCode == 200) res.render('registerPage', {contact: obj})
        else res.render('error');
    });
};

exports.toUpdate = function(req, res) {
    var postData = {
        "name": req.body.fname,
        "email": req.body.email,
        "phone": req.body.phone,
        "gender": req.body.gender
    };
    request.put({
        url: 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/' + req.body.id,
        method: "PUT",
        json: postData
        }, 
        function(error, response, body) {
        console.log(body);
        console.log(response.statusCode);
        if(response.statusCode == 200) res.redirect('/list')
        else res.render('error');
    });
};