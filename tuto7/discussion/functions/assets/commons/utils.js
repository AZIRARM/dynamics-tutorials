let admin = require("firebase-admin");

//le chemin vers le fichier de conf de notre base
let serviceAccount = require("../conf/firebase/dynamics-tutorials-firebase-adminsdk-zhix5-dabd5d0b1a.json");

//la conf de notre base
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dynamics-tutorials.firebaseio.com"
});

//creation du point d'accès à la base firestore
exports.db = admin.firestore();
