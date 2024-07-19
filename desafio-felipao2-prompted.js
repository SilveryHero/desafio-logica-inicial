const prompt = require("prompt-sync")();
let nivel = "nenhum"
let saldoVitorias = 0
var vitorias = parseInt(prompt("Qual o numero de vitorias?"))
var derrotas = parseInt(prompt("Qual o numero de derrotas?"))

function calcularSaldo (vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas;
}

function calcularNivel (saldoVitorias) {

    if (saldoVitorias < 10 ) nivel = "Ferro"
    if (11 < saldoVitorias < 20) nivel = "Bronze"
    if (21 < saldoVitorias < 50) nivel = "Prata"
    if (51 < saldoVitorias < 80) nivel = "Ouro"
    if (81 < saldoVitorias < 90) nivel = "Diamante"
    if (91 < saldoVitorias < 100) nivel = "Lendário"
    if (saldoVitorias >= 101)  nivel ="Imortal"
    
}
function printarResultado(){
    calcularSaldo(vitorias, derrotas);
    calcularNivel(saldoVitorias);

    switch(nivel){
        case "Ferro":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Ferro")
        break;

        case "Bronze":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Bronze")
        break;

        case "Prata":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Prata")
        break;

        case "Ouro":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Ouro")
        break;

        case "Diamante":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Diamante")
        break;

        case "Lendário":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Lendário")
        break;

        case "Imortal":
        console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de Imortal")
        break;
    }
}
printarResultado();
