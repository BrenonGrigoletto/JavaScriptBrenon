document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-car").addEventListener("submit", function(event) {
        event.preventDefault();

        var marca = document.getElementById("marca").value;
        var modelo = document.getElementById("modelo").value;
        var ano = parseInt(document.getElementById("ano").value);
        var cor = document.getElementById("cor").value;
        var kilometragem = parseInt(document.getElementById("kilometragem").value);
        var valorFipe = parseFloat(document.getElementById("valorFipe").value);

        if (isNaN(ano) || isNaN(kilometragem) || isNaN(valorFipe)) {
            alert("Por favor, preencha todos os campos corretamente.");
            return;
        }

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

        var resultadoString = "Anos de Utilização: " + carro.anosUtilizacao() + " anos\n";
        resultadoString += "Valor de Mercado: R$ " + carro.valorMercado().toFixed(2);

        alert(resultadoString);
    });
});
