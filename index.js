import prompt from "prompt-sync";

let database = {};
database.cours = [];
database.profs = [];
database.etudiants = [];

//extraire les donnees dans l'objet table
const cours = database.cours;
const profs = database.profs;
const etudiants = database.etudiants;
cours.push({
  titre: "chimie",
  description: "Ce cours est une introduction de la chimie generale",
  prof: "",
  inscrits: [],
});
console.log("cours", cours);

let prof = {
  nom: "Bakary",
  prenom: "Konate",
  email: "prof1@gmail.com",
  cours: "chimie",
};
profs.push(prof);
cours.prof = prof.nom;

// demander de taper l'email de l'utilisateur
let nouvoEmail = prompt()("taper le nouvel email: ");
//demande de tapper le nouveau prenom et nom
let nouvoPrenom = prompt()("taper le nouveau prenom: ");
let nouvoNom = prompt()("taper le nouveau nom: ");

let nouvoEtudiant = {
  nom: nouvoNom,
  prenom: nouvoPrenom,
  email: nouvoEmail,
};

let inscrits = cours[cours.length - 1].inscrits;
inscrits.push(nouvoEtudiant.email);
etudiants.push(nouvoEtudiant);

//afficher les donnees au terminal
console.log("voici data apres modification(Objet)", JSON.stringify(database));
console.log("voici data apres modification(Objet)", database);
