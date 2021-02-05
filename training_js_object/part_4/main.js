// class Utilisateur {
//     constructor(prenom, nom, email) {
//         this.prenom  = prenom;
//         this.nom     = nom;
//         this.email   = email;   
//     }
//     speak () {
//         console.log("je m'appele " + this.prenom + '' + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + ".");
//     }
// }

// var mark = new Utilisateur('Mark', 'Zuckerberg', 'm.zuckerberg@facebook.com');
// mark.speak();

// First Object with Class

class Animals {
    constructor (nombreDePattes, poids) {
        this.nombreDePattes = nombreDePattes;
        this.poids = poids + 'kg';
    }

    detail() {
        console.log('Je suis un animal qui a ' + this.nombreDePattes + ' pattes, et je pèse ' + this.poids + '.')
    }
}

// Second Object

class Oiseau extends Animals { // Ici, avec le mot clef extends, je fais hériter la classe Oiseau à celle d'Animals
    constructor (nombreDePattes, poids, wingsWidth) {
        super(nombreDePattes, poids); // Grâce à la fonction super, un peu de la même manière que la focntion call, j'appelle et je fais hériter les paramètres de la class Animals
        this.wingsWidth = wingsWidth;
    }

    flying() {
        console.log("l'oiseau vole !")
    }
}

var moineau = new Oiseau ('2', '0.4', "petite");
console.log(moineau);
moineau.detail();
moineau.flying();