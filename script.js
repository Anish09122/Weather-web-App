const apiKey="f1feca358244d4fd6aa300fcc9c1b36b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkWeather(city){
	const Response= await fetch(apiUrl+ city +`&appid=${apiKey}`);
	var data=await Response.json();
	console.log(data);

	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
}

searchbox.addEventListener("click",()=>{
	checkWeather(searchbox.value);
})


