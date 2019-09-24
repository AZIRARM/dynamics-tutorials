var admin = require("firebase-admin");

//le chemin vers le fichier de conf de notre base
var serviceAccount = require("../conf/firebase/dynamics-tutorials-firebase-adminsdk-zhix5-dabd5d0b1a.json");

//la conf de notre base
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dynamics-tutorials.firebaseio.com"
});

//creation du point d'accès à la base firestore
const db = admin.firestore();


exports.createMember = function(_firstname, _lastname, _email, _description){

    console.log("creation d'un nouveau membre");

    let docRef = db.collection('members').doc();

    let setNewMember = docRef.set({
        firstname: _firstname,
        lastname: _lastname,
        email:  _email,
        description: _description
    }).then(function(){
        console.log("creation d'un nouveau membre : Success");
    }).catch(function(error){
        console.log("creation d'un nouveau membre : ERROR  " + error);

    });

}

exports.updateMember = function(_idMember, _firstname, _lastname, _email, _description){

    console.log("mise à jour du membre : "+_idMember);

}


exports.deleteMember = function(_idMember){

    console.log("suppression du membre : "+_idMember);

}

exports.getMember = function(_idMember){

    console.log("récupération du membre : "+_idMember);

}