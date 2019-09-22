var express = require('express');
var api = express();

api.get('/', function(req, resp) {
    resp.setHeader('Content-Type','text/plain');

    resp.send("Api Restfull pour gérer une discussion simple");
});

api.listen(9000);