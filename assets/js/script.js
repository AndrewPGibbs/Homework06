const APIKey = "f9385a3d1330702c97d30400e846f50e";

var lat = "";
var lon = "";
const searchButton = document.getElementById("searchButton");


// searchButton.addEventListener("click", () => getCoordinatesFromOpenWeatherMap(city));


function getCoordinatesFromOpenWeatherMap(city){
    var city = document.getElementById("city").value;
    var geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    
    fetch(geocodingUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log('city = ', city, 'data =', data)});
        lat = data.coord.lat;
        lon = data.coord.lon;
        getForecastWeatherFromOpenWeatherMap(city)

        .catch((err) => console.log(err));
        console.log(city);

}

// getCoordinatesFromOpenWeatherMap(city);

// function getForecastWeatherFromOpenWeatherMap(city) {
//     var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`

//     fetch(forecastUrl)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (data){
//         console.log("city = ", city, "data = ", data)
//     })
//     .catch( function (error){
//         console.log(error);
//     })
// }

function getForecastWeatherFromOpenWeatherMap(city){
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
    fetch(forecastUrl)
    .then((res) => res.json())
    .then((data) => {
        console.log("city =", city, "data =", data)})
        .catch((err) => console.log(err));
        console.log(city)


}

function handleSearchFormSubmit(e){
    e.preventDefault();
    console.log(e.target)
var rawSearch = city.value.trim();
var search = rawSearch.charAt(0).toUpperCase() + rawSearch.slice(1).toLowerCase();
console.log(search);
getCoordinatesFromOpenWeatherMap(search);
gameSearch.value = '';
}

searchButton.addEventListener("click", getCoordinatesFromOpenWeatherMap(city));
searchButton.addEventListener("click", getForecastWeatherFromOpenWeatherMap(city));
searchForm.addEventListener('submit', handleSearchFormSubmit);