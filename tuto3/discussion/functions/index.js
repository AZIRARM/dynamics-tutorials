const functions = require('firebase-functions');
const servicesMembres = require('./assets/services/MembersServices');
const servicesDiscussion = require('./assets/services/DiscussionService')


var express = require('express');
var api = express();
var port = 9000;

api.get('/', function(req, resp) {
    resp.setHeader('Content-Type','text/plain');

    resp.send("Api Restfull pour gérer une discussion simple");
});

api.listen(port, function() {
    console.log("Le serveur discussion api est encours d'exécution");
});

//on exporte notre api dans firebase
exports.api = functions.https.onRequest(api);