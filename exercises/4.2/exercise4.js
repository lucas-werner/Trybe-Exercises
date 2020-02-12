console.log("");
console.log("Ex4");
console.log("");
n = 24;
i = 1;
comprimento = []
linha = null;
if (n < 3) {
    console.log("O número deve ser maior do que 2");
}
else {
    let nlinha = 0;
    if (n % 2 == 0) { nlinha = n / 2; }
    else { nlinha = (Math.trunc(n / 2) + 1) }
    for (i = 1; i <= nlinha; i++) {
        comprimento = [];
        for (let j = 0; j < (nlinha - i); j++) {
            comprimento.push(' ');
        }
        for (let j = 0; j < (n - 2 * (nlinha - i)); j++) {
            comprimento.push('*');
        }
        for (let j = 0; j < (nlinha - i); j++) {
            comprimento.push(' ');
        }
        linha = comprimento.join('');
        console.log(linha);
    }
}
