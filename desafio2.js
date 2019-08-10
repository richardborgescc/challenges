/*
 1. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos;
    - O retorno das funcão deve ser a soma dos dois parametros passados.
*/
exports.sum = (n1, n2) => {
    return n1 + n2;
};
console.log('*** 1 ***');
console.log(exports.sum(10, 5));

/*
 2. Crie uma função com as seguintes características:
    - A função deve receber 2 argumentos, nome e sobrenome;
    - O retorno das funcão deve ser juncão(cancatenacão) dos dois parametros passados e retonar o nome completo.
*/
exports.fullname = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`;
};
console.log('*** 2 ***');
console.log(exports.fullname('richard', 'borges'));

/*
 3. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos;
    - Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      - "Preencha todos os valores corretamente!"
    - O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
exports.calculate = (a1, a2, a3) => {
    if (!a1 || !a2 || !a3) {
        return "Preencha todos os valores corretamente!";
    } else {
        return (a1 * a2 * a3) + 2;
    }
};
console.log('*** 3 ***');
console.log(exports.calculate(1, 2, 3));

/*
 4. Crie uma função com as seguintes características:
    - A função deve receber 3 argumentos.
    - Se somente um argumento for passado, retorne o valor do argumento.
    - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    - Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
exports.calculatev2 = (n1, n2, n3) => {
    if (!n1 && !n2 && !n3) {
        return false;
    } else if (n1 && n2 && n3) {
        return (n1 + n2) / n3;
    } else if (n1 && n2) {
        return n1 + n2;
    } else {
        return n1;
    }
};
console.log('*** 4 ***');
console.log(exports.calculatev2(1,2,3));

/*
 5. Crie uma função com as seguintes características:
    - A função deve receber 1 argumento;
    - O retorno das funcão deve ser um boolean indicando se o numero passado é um numero par ou não.
*/
exports.isPair = (n1) => {
    return n1 % 2 == 0;
};
