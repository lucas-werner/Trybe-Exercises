let n = 9;
let i = 1;
let comprimento = []
linha = null;

for (i; i <= n; i++) {
    comprimento = []
    for (let j = 0; j < n; j++) {
        if (j < (n - i)) {
            comprimento.push(' ');
        }
        else {
            comprimento.push('*');
        }
    }
    linha = comprimento.join('');
    console.log(linha);
}