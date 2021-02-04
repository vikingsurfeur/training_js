// Template String

// Avant, nous concaténions de cette manière :

let prenom  = 'David';
let nom     = 'Dusse';
// let bonjour = "Bonjour je m'appelle " + prenom + ' ' + nom;
// console.log(bonjour);

// Maintenant avec les templates Strings nous pouvons rédigé notre code ainsi

let bonjour = `Bonjour je m'appelle ${prenom} ${nom}`;
console.log(bonjour);