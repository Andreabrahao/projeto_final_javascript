let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

if (numeroUm == stringUm) {
    console.log(
        `Neste caso teste number ${numeroUm} e igual a string ${stringUm} mas com tipos diferentes`
    );
} else {
    console.log(
        `Neste caso o ${numeroUm} e diferente do ${stringUm} por se tratar de um number e uma string`
    );
}

if (numeroTrinta === stringTrinta) {
    console.log(
        `Netse caso a variavel ${numeroTrinta} e o ${stringTrinta} tem o mesmo valor e o mesmo tipo`
    );
} else {
    console.log(
        `As variaveis number ${numeroTrinta} e a string ${stringTrinta} nao tem o mesmo valor`
    );
}

if (numeroDez != stringDez) {
    console.log(
        `As variaveis ${numeroDez} e ${stringDez} tem o mesmo valor, mas tipos diferentes`
    );
} else {
    console.log(
        `As variaveis ${numeroDez} e a string ${stringDez} nao tem o mesmo tipo mastem o mesmo valor`
    );
}
