const nationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

// const {nationality = "Brazilian"} = person

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))
