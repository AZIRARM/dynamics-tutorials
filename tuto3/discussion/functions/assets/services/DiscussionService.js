exports.createMember = function(_firstname, _lastname, _email, _discription){

    console.log("creation d'un nouveau membre");

}

exports.updateMember = function(_idMember, _firstname, _lastname, _email, _discription){

    console.log("mise à jour du membre : "+_idMember);

}


exports.deleteMember = function(_idMember){

    console.log("suppression du membre : "+_idMember);

}

exports.getMember = function(_idMember){

    console.log("récupération du membre : "+_idMember);

}