let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joaaaaaaaana'];

function maiorNome (array) {
    let result = 0,
        nome;
    for (let i = 0; i < array.length; i++) {
        if (array[result].length < array[i].length) {
            nome = array[i];
        }
    }
    return nome;
}
console.log(maiorNome(nomes));