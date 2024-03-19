const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".searchbt");
const weather_img = document.querySelector(".images");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humi");
const wind_speed = document.querySelector(".windi");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");


async function checkWeather(city){
    const api = "1a0a36b36055ac01a60764bdc28c7cd8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }
    weatherBody.style.display = "flex";
    locationNotFound.style.display = "none";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;



    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.style.backgroundImage = `url(${"cloud.jpg"})`;
            break;
        case 'Rain':
            weather_img.style.backgroundImage = `url(${"rain.jpg"})`;
            break;
        case 'Snow':
            weather_img.style.backgroundImage = `url(${"snow.jpeg"})`;
            break;
        case 'Mist':
            weather_img.style.backgroundImage = `url(${"mist.png"})`;
            break; 
        case 'Clear':
            weather_img.style.backgroundImage = `url(${"clear.jpg"})`;
            break;
        case 'Haze':
            weather_img.style.backgroundImage = `url(${"Haze.png"})`;
            break;       
        case 'Smoke':
            weather_img.style.backgroundImage = `url(${"smoke.png"})`;
            break;
    }
}
searchBtn.addEventListener("click", function(){
    checkWeather(inputBox.value);
})