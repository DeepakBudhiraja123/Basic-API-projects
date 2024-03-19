const button = document.querySelector(".click");
const input = document.querySelector("#inputBox");
const actual = document.querySelector(".actual");
const images = document.querySelector(".image");
button.addEventListener('click', ()=>{
    if(!input.value){
        images.style.display = "none";
        return;
    }
    actual.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    actual.addEventListener('load', ()=>{
        images.style.display = "flex";
    })
})