let firestore = require('../commons/utils');

exports.createMember = function(_body, _callback){

    console.log("creation d'un nouveau membre : " + _body);

    let docRef = firestore.db.collection('members').doc();

    docRef.set(_body).then(function(){
        console.log("creation d'un nouveau membre : Success");
        _callback.status(200);
        _callback.setHeader('Content-Type','application/json');
        _callback.send(JSON.stringify(_body));
    }).catch(function(error){
        console.log("creation d'un nouveau membre : ERROR  " + error);
        _callback.status(500);
        _callback.setHeader('Content-Type','application/json');
        _callback.send(JSON.stringify(error));

    });

}

exports.updateMember = function(_body, _callback){

    console.log("mise à jour du membre : "+_body.id);
    let docRef = firestore.db.collection('members').doc(_body.id);

    docRef.update(_body).then(function(){
        console.log("Mise à jour du membre : Success");
        _callback.status(200);
        _callback.send(JSON.stringify(_body));
    }).catch(function(error){
        console.log("Mise à jour du membre : ERROR  " + error);
        _callback.status(500);
        _callback.send(JSON.stringify(error));

    });

}


exports.deleteMember = function(_idMember, _callback){

    console.log("suppression du membre : "+_idMember);

    let docRef = firestore.db.collection('members').doc(_idMember);

    docRef.delete()
    .then(function(){
        console.log("suppression du membre Success ");
        _callback.status(200);
    })
    .catch(function(error){
        console.log("suppression du membre Error : " + error);
        _callback.status(500);
        _callback.send(JSON.stringify(error));
    });
}

exports.getMember = function(_idMember, _callback){

    console.log("récupération du membre : "+_idMember);

    let docRef = firestore.db.collection('members').doc(_idMember);

    docRef.get()
    .then(function(doc){
        console.log("récupération du membre Success : "+JSON.stringify(doc.data()));
        _callback.status(200);
        _callback.setHeader('Content-Type','application/json');
        _callback.send(JSON.stringify(doc.data()));
    })
    .catch(function(error){
        console.log("récupération du membre Error : " + error);
        _callback.status(500);
        _callback.setHeader('Content-Type','application/json');
        _callback.send(JSON.stringify(error));
    });

    return null;
}


exports.getMembers = function(_callback){

    console.log("récupération des membres");

    let docRef = firestore.db.collection('members');

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