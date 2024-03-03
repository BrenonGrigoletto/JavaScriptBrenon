/* 1. Implemente um script com um array cujos valores
sejam adicionados dinamicamente pelo usuário
utilizando-se formulário. A cada nova inserção exiba
todos os dados cadastrados em ordem alfabética em
uma lista ordenada do html. */
let array = [];
function Add(){
    const inserir = document.getElementById('inserir').value.trim();
    if (inserir!=""){
        array.push(inserir);
        array.sort();

        Atual();
    }

}
    function Atual(){
        const ordenar = document.getElementById('ordenar');
        ordenar.innerHTML='';
        
        array.forEach(valor=>{
            
            const listar= document.createElement('li');
            listar.textContent= valor;
            ordenar.appendChild(listar);
        })
    }


