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

    //Nous allons tester ici juste pour voire, au démarage du serveur ensuite nous reporterons dans nos endpoints

    servicesMembres.createMember('Mhamed','Azirar','azirarm@gmail.com','Developpeur');
});

//on exporte notre api dans firebase
exports.api = functions.https.onRequest(api);