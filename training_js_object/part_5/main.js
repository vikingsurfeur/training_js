class Utilisateur {
    constructor(name, surname, birthday) {
        this.name       = name;
        this.surname    = surname;
        this.birthday   = birthday;
    }

    // Un Getter (accesseur) permet de récupérer une propriété, ils sont fait pour retourner une valeur en quelque sorte
    get completeName() {
        return this.name + " " + this.surname;
    }

    // Un Setter (mutateur) permet de définir une propriété
    set completeName(valeur) {
        [this.name, this.surname] = valeur.split(' '); // split() divise une chaine de caractère à partir d'un séparateur pour faire un Array
    }

    presentation() {
        console.log(
            "Hello, I'm " +
                this.name +
                " " +
                this.surname +
                " and my birthday is the " +
                this.birthday +
                " !"
        );
    }
}

var david = new Utilisateur("David", "Bouscarle", "16 Spetember 1980");

david.completeName = 'Quentin Bouscarle';

console.log(david.completeName);