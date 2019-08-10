/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros Ex: [6,9,8,5,7];
    - Mostrar atraves do console.log() os numeros que foram passados atraves do array, na mesma ordem que está no array.
*/
exports.showNumbers = (n) => {
  for (let x = 0; x < n; x++) {
    console.log(x);
  }
};
console.log('*** 1 ***');
exports.showNumbers(10);

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros Ex: [6,9,8,5,7];
    - Mostrar atraves do console.log() quais são so numeros pares que estão dentro do array. Ex:
      - console.log(6);
      - console.log(8);
    - Deve ser feito atraves de um loop;
    - O numero ao ser identivicado como par, deve ser imetiatamente mostrado.
*/
exports.showPairNumbers = (n) => {
  for (let x = 0; x < n; x++) {
    if (x % 2 == 0) {
      console.log(x);
    }
  }
};
console.log('*** 2 ***');
exports.showPairNumbers(10);

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento que será um array com numeros. Ex: [0,1,2,5,9,8,6,4];
    - Retornar um array apenas com os numeros que são pares;
    - Deve ser feito usando a função filter do array. Ex: numbers.filter(...).
*/
exports.filterPairNumbers = (arr) => {
  return arr.filter(
    (v) => {
      return v % 2 == 0;
    }
  );
};
console.log('*** 3 ***');
console.log(exports.filterPairNumbers([1,2,3,4,5,6,7,8,9,10]));