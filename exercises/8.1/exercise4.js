const str = "Tryber x aqui! Tudo bem?"
const newStr = "Werner"
const replace = (str) => str.replace(/x/i, newStr)

console.log(replace(str))

const skills = ['kindness', 'sense of humor', 'charming','sexy', 'smart']

const concatenar = () => `${replace(str)} \n Minhas principais skills são: ${skills.sort()}`

console.log(concatenar())