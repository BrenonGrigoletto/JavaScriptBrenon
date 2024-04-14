
function criaBotao(text, onClickFunction, span = 1) {
  var button = document.createElement('input');
  button.type = 'button';
  button.value = text;
  button.onclick = onClickFunction;
  button.style.gridColumn = 'span ' + span;
  document.querySelector('.calculadora').appendChild(button);
}

function addElemento(value) {
  document.getElementById('display').value += value;
}

function limpaVisor() {
  document.getElementById('display').value = '';
}

function inverteSinal() {
  var display = document.getElementById('display');
  if (display.value !== '' && display.value !== '0') {
    display.value = display.value.charAt(0) === '-' ? display.value.slice(1) : '-' + display.value;
  }
}

function percentagem() {
  var display = document.getElementById('display');
  if (display.value !== '') {
    display.value = parseFloat(display.value) / 100;
  }
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch(error) {
    document.getElementById('display').value = 'Error';
  }
}

criaBotao('AC', limpaVisor);
criaBotao('+/-', inverteSinal);
criaBotao('%', percentagem);
criaBotao('÷', function() { addElemento('/') });
criaBotao('7', function() { addElemento('7') });
criaBotao('8', function() { addElemento('8') });
criaBotao('9', function() { addElemento('9') });
criaBotao('x', function() { addElemento('*') });
criaBotao('4', function() { addElemento('4') });
criaBotao('5', function() { addElemento('5') });
criaBotao('6', function() { addElemento('6') });
criaBotao('-', function() { addElemento('-') });
criaBotao('1', function() { addElemento('1') });
criaBotao('2', function() { addElemento('2') });
criaBotao('3', function() { addElemento('3') });
criaBotao('+', function() { addElemento('+') });
criaBotao('0', function() { addElemento('0') });
criaBotao(',', function() { addElemento('.') });
criaBotao('=', calculate, 2 );