// 5) Escreva um programa que inverta os caracteres de um stringing.

//     IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function Invercao(string) {
    var newstring = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newstring += string[i];
    }
    console.log(newstring);
}
Invercao('palavra');