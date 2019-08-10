/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
exports.invertWord = (str) => {
   let strR = '';

   for (let x = str.split('').length - 1; x >= 0; x--) {
      strR += str[x];
   }

   return strR;
};
console.log('*** 1 ***');
console.log(exports.invertWord("teste"));

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será uma palavra. Ex: Anderson;
    - Retornar a palava invertida. Ex: nosrednA
*/
exports.isPalindrome = (str) => {
   let strR = '';

   for (let x = str.split('').length - 1; x >= 0; x--) {
      strR += str[x];
   }

   return str == strR;
};
console.log('*** 2 ***');
console.log(exports.isPalindrome("ana"));

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array de frutas. Ex: ['maça','banana'];
    - Deve inserir 'kiwi' no final do array;
    - Deve remover o primeiro item do array;
    - Deve inserir 'goiaba' no inicio no array;
    - Deve retornar o resultado;
  OBS: Devem ser utilizados as funções necessarias de manipulação de array (push, shift, unshift, ...)
*/
exports.fruits = (arr) => {
   arr.push('kiwi');
   arr.shift();
   arr.unshift('goiaba');

   return arr;
};
console.log('*** 3 ***');
console.log(exports.fruits(['maça','banana']));