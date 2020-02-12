let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function iMenorValor(arrayTeste) {

    let valor = [];
    valor = arrayTeste;
    let indiceMenor = 0;
    let comprimento = valor.length;
    for (let i = 0; i < comprimento - 1; i++) {
        if (valor[i] < valor[i + 1] && valor[i] < valor[indiceMenor]) { indiceMenor = i }
        if (valor[comprimento - 1] < valor[indiceMenor]) { indiceMenor = (comprimento - 1) }
    }
    return indiceMenor;
}
console.log(iMenorValor(arrayTeste));