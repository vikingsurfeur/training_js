// Sélection id HTML

let dateSpan = document.querySelector("#date");

// Je récupère la date actuelle universelle

let dateActuelle = new Date();

// Je transforme la date universelle en date locale

let dateLocale = dateActuelle.toLocaleString( /*'fr-FR'*/ navigator.language, {
    weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
    year: 'numeric', // numeric (xxxx), 2-digit (xx)
    month: 'long', // short, narrow, long
    day: 'numeric', // numeric, 2-digit
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});

// Injection de la date dans l'HTML

dateSpan.textContent = dateLocale;

// console.log(dateLocale);

// Plusieurs méthodes sont disponibles

// toLocaleDateString   = jour, mois, année
// toLocaleTimeString   = heure
// toLocaleString        = jour, mois, année, heure

// On peut récupérer la localité du navigatuer de l'utilisateur avec la méthode navigator.language, si on le passe en paramètre de notre objet date, c'est magique...