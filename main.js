const apiKey="95eb6baa5db3b5f21373ce83a6c5e96e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//when clicked on inputs, results are displayed 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+ city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        ddocument.querySelector(".weather").style.display="none";   
    }
    else{

        var data=await response.json();

    //updating weather
    document.querySelector(".city").innerHTML=data.name;
    //to round off the temperature
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

    //updating icon
    if(data.weather[0].main=="Haze"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Smoke"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
}
searchBtn.addEventListener("click", () => {
   
    checkWeather( searchBox.value);
})
