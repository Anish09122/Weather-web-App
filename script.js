const apiKey="f1feca358244d4fd6aa300fcc9c1b36b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const hide=document.querySelector(".weather");
const error=document.querySelector("#error");
const weatherIcon=document.querySelector('.weather-icon')
async function checkWeather(city){
	const Response= await fetch(apiUrl+ city +`&appid=${apiKey}`);
    if(Response.status==404){
        error.style.display='block';
        hide.style.display='none';
    }else{
	var data=await Response.json();
	console.log(data);
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
    if(data.weather[0].main == "Clouds"){
         weatherIcon.src = "images/clouds.png";

     }else if(data.weather[0].main == "Clear"){
         weatherIcon.src = "images/clear.png";
     }else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
     }else if(data.weather[0].main == "Mist") {
       weatherIcon.src = "images/mist.png";
    }
    error.style.display='none';
   hide.style.display='block';

    }
}

searchbtn.addEventListener("click",()=>{
	checkWeather(searchbox.value);
})



