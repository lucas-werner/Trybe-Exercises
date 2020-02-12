function longestWord(str){
  let longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
