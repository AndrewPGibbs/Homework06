const APIKey = "f9385a3d1330702c97d30400e846f50e";
const city = document.getElementById("city-name").textContent;
var lat = "";
var lon = "";
var largeHeading = document.getElementById('searchResult');
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getCoordinatesFromOpenWeatherMap);


function fiveDayForecast(data) {

    for (let i = 1; i< 6; i++) { 
    document.getElementById(`temp${i}`).textContent = "Temperature : "+ (Math.round(((data.list[i].main.temp - 273.15) * 9/5 + 32)))+ " degrees Farenheit";
    document.getElementById(`hum${i}`).textContent = "Humidity : "+ data.list[i].main.humidity+ "%";
    document.getElementById(`wind${i}`).textContent = "Wind speeds : "+ data.list[i].wind.speed+ "mph"
    }
}
 function sendDataToPage(data) {
    
    farenheightTemp = parseFloat(data.main.temp)

    cityName = document.getElementById("city-name").value
    cityNameUppercase = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
    largeHeading.textContent =cityNameUppercase
     
    document.getElementById('temp-main').textContent = "Temperature : "+ (Math.round(((farenheightTemp - 273.15) * 9/5 + 32)))+ " degrees Farenheit";
    document.getElementById('hum-main').textContent = "Humidity : "+ data.main.humidity + "%";
    document.getElementById('wind-main').textContent = "Wind speeds : "+ data.wind.speed+ "mph"
 }

function getCoordinatesFromOpenWeatherMap() {
    console.log('first function log: city', city)
    var geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    fetch(geocodingUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        lat = data.coord.lat;
        lon = data.coord.lon;
        sendDataToPage(data);
        getForecastWeatherFromOpenWeatherMap(data)
    })
    .catch( function (error){
        console.log(error);
    })
    console.log(city);    
}


function getForecastWeatherFromOpenWeatherMap(city) {
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
   fetch(forecastUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log("city = ", city, "data = ", data)
        fiveDayForecast(data);
    })
    .catch( function (error){
        console.log(error);
    })
    
}
