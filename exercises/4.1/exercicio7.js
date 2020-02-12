let nota = 100

function conceito (nota) {
    if (nota >= 90){
        console.log (`Nota final: ${nota}. Aprovado com conceito A.`)
    } else if (nota < 90 && nota >=80){
        console.log(`Nota final: ${nota}. Aprovado com conceito B.`)
    } else if (nota < 80 && nota >=70){
        console.log(`Nota final: ${nota}. Aprovado com conceito C.`)
    } else if (nota < 70 && nota >=60){
        console.log(`Nota final: ${nota}. Aprovado com conceito D.`)
    } else if (nota < 60 && nota >=50){
        console.log(`Nota final: ${nota}. Reprovado com conceito E.`)
    } else if (nota < 50 && nota >=40){
        console.log(`Nota final: ${nota}. Reprovado com conceito F.`)
    } else { 
        console.log('Nota Inválida!')
    }  

}

conceito(46)