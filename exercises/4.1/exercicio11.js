let salario = 5000
let ir = 0;
let inss = 0;

if (salario <= 0){
    console.log("Salário inválido")
} else if (salario < 1556.94) {
    inss = salario * (8/100) 
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = salario * (9 / 100);
} else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = salario * (11 / 100);
} else {
    inss = 570.88;
}

salario =  salario - inss;

if (salario >= 1903.99 && salario <= 2826.65) {
    ir = salario * (7.5 / 100) - 142, 80;
} else if (salario >= 2826.66 && salario <= 3751.05) {
    ir = salario * (15 / 100) - 354.80;
} else if (salario >= 3751.06 && salario <= 34664.68) {
    ir = salario * (22.5 / 100) - 636.13;
} else {
    ir = salario * (27.5 / 100) - 869.36
}

salario = salario - ir

console.log(salario)