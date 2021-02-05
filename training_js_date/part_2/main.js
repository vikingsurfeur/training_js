// Initialisation de la date actuelle avec l'objet date

let dateActuelle = new Date();

// Quelques Getters

console.log(dateActuelle.getFullYear()); // Méthode Get pour récupérer l'année de la date actuelle
console.log(dateActuelle.getDay()); /* Méthode Get pour récupérer le jour de la date actuelle ATTENTION je jour de la semaine commence à parti de Dimanche à l'index 0, 
par exemple aujourd'hui nous sommes Jeudi, le console.log doit m'afficher 4 */
console.log(dateActuelle.getDate()); // Méthode Get piur récupérer la date du jour en cours, Aujourd(hui nous sommes le 4, le console.log me renvoie 4

// Quelques Setters

dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear()); // Ici j'ai attribué et modifié l'année en cours en 2750
