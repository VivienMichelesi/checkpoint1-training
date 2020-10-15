/*
 Ecris une fonction isEven qui prend un nombre en paramètre,
 et renvoie true si celui-ci est pair, false sinon.
*/

function isEven(num) {
  const modulo = num % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}


// Exemples d'appel pour vérifier
// le bon fonctionnement de ton code
// Ne pas modifier
console.log(isEven(3)); // doit afficher false
console.log(isEven(7)); // doit afficher false
console.log(isEven(10)); // doit afficher true
console.log(isEven(42)); // doit afficher true
