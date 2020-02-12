const promess = () => { return new Promise((resolve, reject) => {
    const arr = [];
    for(let i= 0 ; i < 10 ; i++) { arr[i]= Math.round((Math.pow(Math.random() * 50,2)))};
    const compara = arr.reduce((arr,acumulator) => arr+= acumulator,0);
    if (compara > 8000) {
        resolve([Math.round(compara/2), Math.round(compara/3), Math.round(compara/5), Math.round(compara/10)]);
    }
    reject();
})}
const promessSoma = (arr) => { return new Promise((resolve) => {
    resolve(arr.reduce((curr, acc) => curr+=acc, 0));
})}
promess()
.then((response) => { console.log(response); 
    promessSoma(response)
.then(response => console.log(response))
})
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))