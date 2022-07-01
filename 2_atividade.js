// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//     IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código

   
function Fibonacci(num) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    for (var i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

var f = Fibonacci(10);
const consultNum = 1

console.log(f);
(f.includes(consultNum) ? console.log(`O número ${consultNum} está presente na sequência de fibonacci`) : console.log(`O número ${consultNum} não foi encontrado na sequência de fibonacci`))