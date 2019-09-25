let db = require('../commons/utils');

exports.sendMessage = function(_body, _callback){

    console.log("envoie d'un nouveau message à : "+ _idMember);

    let docRef = db.collection('messages').doc();

    docRef.set(_body).then(function(){
        console.log("creation d'un nouveau message : Success");
        _callback.status(200);
        _callback.send(JSON.stringify(_body));
    }).catch(function(error){
        console.log("creation d'un nouveau message : ERROR  " + error);
        _callback.status(500);
        _callback.send(JSON.stringify(error));

    });

}

exports.getMessages = function(_idMember, _callback){

    console.log("récupération des messages pour le membre : "+ _idMember);

    let docRef = firestore.db.collection('messages');

    docRef.get()
    .then(function(docs){    
        console.log("récupération des membres Success : "+JSON.stringify(docs));
        _callback.status(200);
        _callback.setHeader('Content-Type','application/json');
        _callback.send("{}");
    })
    .catch(function(error){
        console.log("récupération des membres Error : " + error);
        _callback.status(500);
        _callback.setHeader('Content-Type','application/json');
        _callback.send(JSON.stringify(error));
    });
    return null;
}
