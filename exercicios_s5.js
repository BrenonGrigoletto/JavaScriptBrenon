let contHomem = 0;
let contMulher = 0;

function contUpdate() {
    document.getElementById('contador_total').textContent = contHomem + contMulher;
    document.getElementById('cont_homem').textContent = contHomem;
    document.getElementById('cont_mulher').textContent = contMulher;
}

function incrementar(type) {
    if (type === 'homem') {
        contHomem++;
    } else if (type === 'mulher') {
        contMulher++;
    }
    contUpdate();
}

function decrementar(type) {
    if (type === 'homem' && contHomem > 0) {
        contHomem--;
    } else if (type === 'mulher' && contMulher > 0) {
        contMulher--;
    }
    contUpdate();
}

function reiniciarContagem() {
    contHomem = 0;
    contMulher = 0;
    contUpdate();
}
