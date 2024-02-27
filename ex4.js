/* 4. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido calcule o fatorial do
mesmo e exiba o resultado em uma janela de alerta.
 */

let numeroFat= prompt("Digite um numero inteiro: ")

numeroFat = parseInt(numeroFat)

function Fat (numeroFat){
    let fatorial =1;
 while (numeroFat>1){
    fatorial = fatorial * numeroFat;
    numeroFat--;
    }
    return fatorial;
}

alert (Fat(numeroFat));