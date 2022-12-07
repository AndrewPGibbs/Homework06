const APIKey = "f9385a3d1330702c97d30400e846f50e";
var city = "orlando";//document.getElementById("city").value;
var lat = "";
var lon = "";
var largeHeading = document.getElementById('searchResult');
// const searchButton = document.getElementById("searchButton");

// searchButton.addEventListener("click", getCoordinatesFromOpenWeatherMap);
// searchButton.addEventListener("click", () => getCoordinatesFromOpenWeatherMap(city));


 function sendDataToPage() {
    largeHeading.textContent = city;
    console.log("console log from sendDataToPage function")
 }

function getCoordinatesFromOpenWeatherMap(city) {
    var geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`

    fetch(geocodingUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log("city = ", city, "data = ", data)
        lat = data.coord.lat;
        lon = data.coord.lon;
        getForecastWeatherFromOpenWeatherMap(city)
    })
    .catch( function (error){
        console.log(error);
    })
    console.log(city);
    sendDataToPage(city);
}
getCoordinatesFromOpenWeatherMap(city);

function getForecastWeatherFromOpenWeatherMap(city) {
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`

    fetch(forecastUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log("city = ", city, "data = ", data)
    })
    .catch( function (error){
        console.log(error);
    })

}
