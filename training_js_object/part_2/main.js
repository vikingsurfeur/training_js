// CREATION DES OBJETS

function Animal(numberLegs, weight) {
    this.numberLegs = numberLegs;
    this.weight = weight + "kg";
}

function Oiseau(numberLegs, weight, spanWings) {
    Animal.call(this, numberLegs, weight);
    // la fonction Call() permet d'appellet une fonction constructeur : en premier paramètre (this) on donne l'objet actuel, ensuite, on donne les arguments de son constructeur
    this.spanWings = spanWings;
}

function Mammals(numberLegs, weight, typeOfHair) {
    Animal.call(this, numberLegs, weight);
    this.typeOfHair = typeOfHair;
}

// CREATION DES METHODES

Animal.prototype.scream = function () {
    console.log(
        "Cri ou chant de l'animal " +
            ", j'ai " +
            this.numberLegs +
            " pattes et je pèse " +
            this.weight
    );
};

// HERITAGE DES OBJETS, ATTENTION ICI, IL FAUT ABSOLUMENT DECLARER QUE LE CONSTRUCTEUR DE BASE EST BIEN ANIMAL ET NON PAS LA FONCTION DE BASE JS OBJECT()

Mammals.prototype = Object.create(Animal.prototype);
Mammals.prototype.constructor = Mammals; // ICI JE REINITIALISE LE CONSTRUCTEUR DE MAMMALS POUR NE PAS QU'IL DEPENDE ENTIEREMMENT D'ANIMAL

// DECLARATION DES OBJETS

var perroquet = new Oiseau(2, 1, "average");
perroquet.name = "perroquet";

var sanglier = new Mammals(4, 50, "short");
sanglier.name = "sanglier";
console.log(sanglier);
sanglier.scream();
