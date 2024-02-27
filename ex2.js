/* 2. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é ou não primo.
 */


let numero = prompt("Digite um numero interio");

numero = parseInt(numero);

if(Number.isInteger(numero) && numero>0 ){
    Primo(numero);
}
else {document.write("Numero invalido!");
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
