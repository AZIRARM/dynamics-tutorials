//les imports
let functions = require('firebase-functions');
let servicesMembres = require('./assets/services/MembersServices');
let servicesDiscussion = require('./assets/services/DiscussionService');
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');


//les déclarations / variables / constantes
let api = express();
let port = 9000;

//Midlewares
//les midlewares seront appelés avant en premiers
api.use(bodyParser.json());
//tiny c'est une conf prédéfinie pour une conf simple, pour plus d'info se rendre sur la page du projet
api.use(morgan('tiny'));



//Les routes
api.get('/', function(req, resp) {
    resp.setHeader('Content-Type','text/plain');
    resp.send("Api Restfull pour gérer une discussion simple");
});

api.get('/members', function(req, resp) {
    servicesMembres.getAllMembers(resp);
});
api.post('/members', function(req, resp) {
    servicesMembres.createMember(req.body, resp);
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


api.post('/messages', function(req, resp) {
    servicesDiscussion.sendMessage(req.body, resp);
});

api.delete('/messages/member/:idMember', function(req, resp) {
    servicesDiscussion.deleteMember(req.params.idMember, resp);
});

api.listen(port, function() {
    console.log("Le serveur discussion api est encours d'exécution");
});

//on exporte notre api dans firebase
exports.api = functions.https.onRequest(api);