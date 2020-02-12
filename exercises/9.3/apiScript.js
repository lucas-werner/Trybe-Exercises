const API_URL = "https://icanhazdadjoke.com/search?term=hipster";


const fetchJoke = () => {
    fetch(API_URL, {
        headers: ({
            Accept : "application/json",
    })})
    .then(response => {
        response.json()
        .then(response => {
            document.getElementById('jokeContainer').innerHTML = response.results[0].joke;
        })
        .catch(() => console.error('sem Piada'))
    })
  .catch(()=> console.error('error'))
}  

window.onload = () => fetchJoke()

