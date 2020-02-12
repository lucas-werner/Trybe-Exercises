let button = document.getElementById('button');
let counter = document.getElementById('counter');
let clickCount = 0
button.addEventListener('click', function() {
  clickCount++
  counter.innerHTML = clickCount
  console.log(clickCount)
})