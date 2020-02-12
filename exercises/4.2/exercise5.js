let nPrimo = 151;
let nDivisoes = [];
let x;
let ePrimo = true;
for (let i = 2; i < nPrimo; i++) {
    nDivisoes.push(i);
}
for (x of nDivisoes) {
    if (nPrimo % x == 0) { ePrimo = false }
}
if (ePrimo == true) { console.log(nPrimo, 'é primo') }
else { console.log(nPrimo, 'não é primo') }