let functions = require('firebase-functions');
let servicesMembres = require('./assets/services/MembersServices');
let servicesDiscussion = require('./assets/services/DiscussionService');


let express = require('express');
let api = express();
let port = 9000;

api.get('/', function(req, resp) {
    resp.setHeader('Content-Type','text/plain');
    resp.send("Api Restfull pour gérer une discussion simple");
});

api.get('/members', function(req, resp) {
    servicesMembres.getAllMembers(resp);
});
api.post('/members', function(req, resp) {
    servicesMembres.createMember(req.params.body, resp);
});
api.put('/members', function(req, resp) {
    servicesMembres.updateMember(req.params.body, resp);
});
api.get('/members/:idMember', function(req, resp) {
    console.log("récupération du membre : "+req.params.idMember);
    servicesMembres.getMember(req.params.idMember, resp);
});
api.delete('/members/:idMember', function(req, resp) {
    servicesMembres.deleteMember(req.params.idMember, resp);
});

api.listen(port, function() {
    console.log("Le serveur discussion api est encours d'exécution");
});

//on exporte notre api dans firebase
exports.api = functions.https.onRequest(api);