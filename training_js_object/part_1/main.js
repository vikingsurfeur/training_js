// function sendGps() {
//     return { latitude: 12, longitude: 35 };
// }

// let gpsPlace = sendGps();

// console.log(gpsPlace);

// let mark = {
//     prenom: "Mark",
//     nom: "Zukerbeg",
//     email: "mark@facebook.com",

//     // Ancienne Méthode
//     sePresenter: () => {
//         console.log(`Bonjour, je m'appelle ${mark.prenom}`);
//     }
// }

// mark.sePresenter();

// Créer une fonction constructeur

function Utilisateur(prenom, nom, email) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
}

// Création Méthode qui purra être utiliser par tous les objets communs au Constructeur

Utilisateur.prototype.hello = function () {
    console.log(
        "Bonjour, je m'appelle " +
            this.prenom +
            " " +
            this.nom +
            " et vous pouvez me contacter à l'adresse email: " +
            this.email
    );
}

function Realstate(type, owner, parking, price, surface) {
    this.type = type;
    this.owner = owner;
    this.parking = parking;
    this.price = price + "€";
    this.surface = surface + "m²";
}

// Je créé un objet (owner) avec mon constructeur

var mark = new Utilisateur("mark", "zukerbeg", "mark@facebook.com");
var bill = new Utilisateur("bill", "gates", "bill@gatesnotes.com");

// On peut également ajouter une propréité à l'objet Mark

mark.poste = "PDG de Facebook";

// Présentez-vous owner

mark.hello();
bill.hello();

console.log(mark, bill);

// Objet appartement avec mon cosntructeur

var appartementA = new Realstate("appartement", mark, true, 280000, 85);

// Console Log Realstate

console.log(appartementA);

// Déclarer des objets avec Object()

var MonObjet = new Object();
MonObjet.titre = "Titre de l'objet";
console.log(MonObjet);
