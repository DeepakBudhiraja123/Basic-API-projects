const inputWord = document.querySelector("#inputword");
const button = document.querySelector("#search");
const result = document.querySelector(".result");
button.addEventListener('click', ()=>{
    getMeaning(inputWord.value);
})
async function getMeaning(word){

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    try{
        result.innerHTML = 
        `<p class = "Word">Word : ${word}</p>
        <p class = "Speech">${data[0].meanings[0].partOfSpeech} </p>
        <p class = "Meaning"> <strong> Meaning : </strong> ${data[0].meanings[0].definitions[0].definition} </p>
        <p class = "Example"> <strong> Examples : </strong> ${data[0].meanings[0].definitions[0].example === undefined ? "Not Found" : data[0].meanings[0].definitions[0].example}</p>
        <p class = "Antonyms"> <strong> Antonyms: </strong></p>`;
        if(data[0].meanings[0].definitions[0].antonyms.length === 0){
            result.innerHTML += `Not Found`;
        }
        else{
            for(let i = 0; i<data[0].meanings[0].definitions[0].antonyms.length; i++){
                result.innerHTML += `<li>${data[0].meanings[0].definitions[0].antonyms[i]}</li>`;
            }
        }

        result.innerHTML += `<div class = "Read"><a href="${data[0].sourceUrls}" target ="_blank">Read More</a></div>`
    }

    catch(error){
        result.innerHTML = `<p>Sorry, No result found for the given word</p>`
    }


    
}