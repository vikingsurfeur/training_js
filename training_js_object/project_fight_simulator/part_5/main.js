/*  FIGHT SIMULATOR
    AN OBJECT JAVASCRIPT JOURNEY 
    BY DAVID BOUSCARLE */

// CLASS PERSONNAGE

class Personnage {
    constructor(pseudo, classe, sante, attaque) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }

    // Getters informations

    get informations() {
        return (
            this.pseudo +
            " " +
            this.classe +
            " a " +
            this.sante +
            " points de vie et est au niveau " +
            this.niveau +
            " !"
        );
    }

    // Méthode évoluer

    evoluer() {
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
    }

    // Méthode vérification santé

    verifierSante() {
        if (this.sante <= 0) {
            this.sante == 0;
            console.log(this.pseudo + " a perdu !");
        }
    }
}

// CLASS MAGICIEN

class Magicien extends Personnage {
    constructor(pseudo) {
        super(pseudo, "magicien", 170, 90);
    }

    // Méthode attaquer

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(
            this.pseudo +
                " attaque " +
                personnage.pseudo +
                " en lançant un sort (" +
                this.attaque +
                " dégâts)"
        );

        // Méthodes

        this.evoluer();
        personnage.verifierSante();
    }

    // Methode coup spécial

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(
            this.pseudo +
                " attaque " +
                personnage.pseudo +
                " attaque avec son coup spécial, puissance de Zeus(" +
                this.attaque * 5 +
                " dégâts)"
        );

        // Méthodes

        this.evoluer();
        personnage.verifierSante();
    }
}

// CLASS GUERRIER

class Guerrier extends Personnage {
    constructor(pseudo) {
        super(pseudo, "guerrier", 350, 50);
    }

    // Méthode attaquer

    attaquer(personnage) {
        personnage.sante -= this.attaque;
        console.log(
            this.pseudo +
                " attaque " +
                personnage.pseudo +
                " avec son épée (" +
                this.attaque +
                " dégâts)"
        );

        // Méthodes

        this.evoluer();
        personnage.verifierSante();
    }

    // Methode coup spécial

    coupSpecial(personnage) {
        personnage.sante -= this.attaque * 5;
        console.log(
            this.pseudo +
                " attaque " +
                personnage.pseudo +
                " avec ses haches de guerre (" +
                this.attaque * 5 +
                " dégâts)"
        );

        // Méthodes

        this.evoluer();
        personnage.verifierSante();
    }
}

// Création des personnages 

var gandalf = new Magicien("Gandalf");
var thor    = new Guerrier("Thor");

// Protocole de Combat

console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);