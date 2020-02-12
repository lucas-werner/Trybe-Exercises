function factorial(n) {
  for (let i = n-1; i > 1; i--) {
      n *= i;
  }
  return n;
}


console.log(factorial(5));

// recursivo

function factorial2(n) {
if (n <= 1) {
    return 1;
} else {
    return n * factorial2(n - 1);
}
}

