// Call et Apply permettent d'inviquer immédiatement une fonction
// Call

let gandalf = { titre: 'Magicien'};

function speak() {
    console.log('Bonjour, je suis un ' + this.titre);
}

speak.apply(gandalf);