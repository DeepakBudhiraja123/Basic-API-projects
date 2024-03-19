const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";
const button = document.querySelector(".click");
const joke = document.querySelector(".joke");

async function getJoke(){
    const data = await fetch(`${url}`);
    const response = await data.json();
    joke.innerHTML = response.joke;
    joke.style.display = "flex";

}

button.addEventListener('click', ()=>{
    getJoke();
})