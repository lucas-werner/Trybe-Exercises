let string = '';

function reverse(s) {
    return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

function palin(string) {
    let text = reverse(string);
    if (string == text) return true
    return false;
}
console.log(palin(string));