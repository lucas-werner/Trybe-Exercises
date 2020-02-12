const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

console.log(uppercase('lucas', console.log))

module.exports = uppercase;