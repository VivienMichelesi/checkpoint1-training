/*
 Ecris une fonction sumNumbers
 qui prend en paramètre un tableau de nombres,
 et renvoie la somme de ces nombres
*/

function sumNumbers(numArray) {
  let sum = 0;
  for (let num of numArray) {
    sum += num;
  }
  return sum;
}


// Exemples d'appel pour vérifier
// le bon fonctionnement de ton code
// Ne pas modifier
console.log(sumNumbers([1, 2, 3, 4])); // doit afficher 10
console.log(sumNumbers([2, 4, 7])); // doit afficher 13
console.log(sumNumbers([11, 22, 33])); // doit afficher 66
