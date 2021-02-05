// Récupérer la date actuelle de manière textuelle

let dateActuelle = Date(); 
console.log(dateActuelle); // Norme anglo-saxonne

// Récupérer la date actuelle en secondes, manière plus évidente pour travailler en terme de calicul mathématiques

let dateEnSecondes = Date.now();
console.log(dateEnSecondes); // On affiche la date en cours en secondes écoullées depuis le 1er Janvier 1970 à minuit UTC (Londres).

// Date précise avec l'objet date

let datePrecise = new Date(2021, 1, 4, 15, 44);
console.log(datePrecise);

// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0