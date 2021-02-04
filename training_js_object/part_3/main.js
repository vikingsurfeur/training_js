// Call et Apply permettent d'invoquer immédiatement une fonction
// Call et Apply

let gandalf = { titre: 'Magicien' }; // Objet littéral

function speak(arme, degat) {
    console.log('Bonjour, je suis un ' + this.titre + ', vous possédez ' + arme + ' qui donne ' + degat + ' points de degats.');
}

speak.apply(gandalf, ['un baton', 75]); // La méthode apply a besoin d'un tableau pour posser les arguments en paramètres de la fonction appelée
speak.call(gandalf, 'un baton', 75); // La méthode call n'a pas besoin de tableau, il faut passer les paramètres un à un 

// Bind
// Objectif: changer de contexte avec Bind

this.valeur = "window";

let monObjet = {
    valeur : 'objet',
    getValeur : function() {
        console.log(this.valeur);
    }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;
maValeur(); // Ici on va retourner forcément 'window' car nous sommes dans le contexte global

let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // Ici, je change le contexte d'application de ma valuer avec bind
maValeurAvecBind(); // J'obtiens donc 'objet'