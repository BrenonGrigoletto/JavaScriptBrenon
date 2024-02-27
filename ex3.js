/* 3. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é par ou ímpar. */
let numero = prompt("Digite um numero interio");

numero = parseInt(numero);

if(Number.isInteger(numero)){
    ParImpar(numero)
}
else {alert("Numero invalido!");
}

function ParImpar (numero){
    if(numero%2==0){
        alert("O número é PAR!");
    }
    else{
        alert("O número é IMPAR!");
    }
}