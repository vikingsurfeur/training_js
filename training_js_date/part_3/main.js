// Sélection id HTML

var dateSpan = document.querySelector("#date");

// Je récupère la date actuelle universelle

var dateActuelle = new Date();

// Je transforme la date universelle en date locale



function currentTime() {
    var dateLocale = dateActuelle.toLocaleString( /*'fr-FR'*/ navigator.language, {
        weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
        year: 'numeric', // numeric (xxxx), 2-digit (xx)
        month: 'long', // short, narrow, long
        day: 'numeric', // numeric, 2-digit
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    dateSpan.innerHTML = dateLocale;
}

setInterval(() => {
    currentTime()
}, 1000);

// console.log(dateLocale);

// Plusieurs méthodes sont disponibles

// toLocaleDateString   = jour, mois, année
// toLocaleTimeString   = heure
// toLocaleString        = jour, mois, année, heure

// On peut récupérer la localité du navigatuer de l'utilisateur avec la méthode navigator.language, si on le passe en paramètre de notre objet date, c'est magique...