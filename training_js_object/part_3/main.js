// Call et Apply permettent d'inviquer immédiatement une fonction
// Call

let gandalf = { titre: 'Magicien' };

function speak(arme, degats) {
    console.log('Bonjour, je suis un ' + this.titre + ', vous possédez ' + arme + ' qui donne ' + degats + ' points de dégats.');
}

speak.apply(gandalf, ['un baton', 75]);