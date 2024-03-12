/* 1. Implemente um script JavaScript que exiba a data atual no
formato:
Quarta-feira, 15 de fevereiro de 2023 */

function dataAtualizada() {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  
    const dataAtual = new Date();
    const diaSemana = diasSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = mesesAno[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();
    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;   
    alert(dataFormatada);
}

/* 2. Pesquise a utilização do método setTimeout() e implemente
um relógio que atualize o horário a cada segundo: */
function relogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    const horario = `${horas}:${minutos}:${segundos}`;
    document.write(horario,"<br>");
    setTimeout(relogio, 1000);
}


/* 3. Implemente um script que leia uma palavra ou frase de um
campo de texto e exiba em uma janela de alert se o texto é ou
não um palíndromo. */

function verificarPalindromo() {
    const texto = document.getElementById('entrada').value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reverso = texto.split('').reverse().join('');
    if (texto === reverso) {
        alert(`"${texto}" é um palíndromo!`);
    } else {
        alert(`"${texto}" não é um palíndromo.`);
    }
}
document.getElementById('verificarBotao').addEventListener('click', verificarPalindromo);
