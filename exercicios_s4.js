document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var ano = parseInt(document.getElementById("ano").value);
    var cor = document.getElementById("cor").value;
    var kilometragem = parseInt(document.getElementById("kilometragem").value);
    var valorFipe = parseInt(document.getElementById("valorFipe").value);

    var carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        kilometragem: kilometragem,
        valorFipe: valorFipe,
        anosUtilizacao: function() {
            var anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },
        valorMercado: function() {
            if (this.kilometragem <= 30000) {
                return this.valorFipe * 1.1;
            } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
                return this.valorFipe;
            } else {
                return this.valorFipe * 0.9;
            }
        }
    };

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Anos de Utilização: " + carro.anosUtilizacao() + " anos<br>";
    resultadoDiv.innerHTML += "Valor de Mercado: R$ " + carro.valorMercado().toFixed(2);
});