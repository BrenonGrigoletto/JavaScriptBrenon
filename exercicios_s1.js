/* 1. Implemente um script JavaScript que solicite ao usuário a entrada de um
dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do
dado informado. Caso o usuário confirme escreva no corpo da página o tipo
do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado
por visitar esta página”.*/
function ex1(){
    let dado = prompt("Faça a entrada dos dados");
    let confirma = confirm ("Quer sabar o tipo do seu dado?")
    if (confirma){
        if (!isNaN (dado)){
            alert ("Esse tipo de dado é Numero")
        } else if( dado == "true" || dado == "false"){
            alert("Dado Boolean");
        }
        else{
            alert("O tipo de dado é String")
        } 
    } else {
        alert("Obrigado por visitar esta página!")
    }
}

/* 2. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é ou não primo.
 */

function ex2(){
    let numero = prompt("Digite um numero interio");
    
    numero = parseInt(numero);
    
    if(Number.isInteger(numero) && numero>0 ){
        Primo(numero);
    }
    else {alert("Numero invalido!");
    }
    
    function Primo(numero){
        if (numero ==2){
            alert(numero+" É Primo!");
        }
        for(let i=2;i<numero;i++){
            if (numero%i==0){
                alert(numero+" Não é Primo!");
                return true;
            }
        } 
        alert(numero+" É Primo!")
    }
    }


    /* 3. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é par ou ímpar. */

function ex3(){
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
}

/* 4. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido calcule o fatorial do
mesmo e exiba o resultado em uma janela de alerta.
 */

function ex4(){
let numeroFat= prompt("Digite um numero inteiro: ")
    
numeroFat = parseInt(numeroFat);

if(Number.isInteger(numeroFat) && numeroFat>0){
    Fat (numeroFat);
}
else { return alert("Numero invalido!");
}

function Fat (numeroFat){
    let fatorial =1;
 while (numeroFat>1){
    fatorial = fatorial * numeroFat;
    numeroFat--;
    }
    return fatorial;
}

alert (Fat(numeroFat));
}