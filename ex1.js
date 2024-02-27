/* 1. Implemente um script JavaScript que solicite ao usuário a entrada de um
dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do
dado informado. Caso o usuário confirme escreva no corpo da página o tipo
do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado
por visitar esta página”. 
*/

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
        document.write("Obrigado!")
    }
    

