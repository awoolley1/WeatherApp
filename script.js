
var searchbtn = $("#search-btn")
var cityInput = $("#city-input")
var appendCitiesHere = $("#display-cities")
var nameDate = $("#city-name-date")
var temperature = $("#temp")
var humidity = $("#humid")
var windSpeed = $("#wind")
var uv = $("#uv")
var lat
var lon


//onclick search functionality
searchbtn.click(function() {
    var recentCity = cityInput.val()
    var savedCities = JSON.parse(localStorage.getItem("citySearchesArray")) || [];
    savedCities.push(recentCity);
    localStorage.setItem("citySearchesArray", JSON.stringify(savedCities));

var citiesDisplay = (JSON.parse(localStorage.getItem("citySearchesArray")))

    var cityButton=$('<input/>').attr({
        type: "button",
        id: "cityName",
        class: "btn btn-success  btn-outline-light" ,
        value: citiesDisplay[citiesDisplay.length-1] 
    })
    appendCitiesHere.append(cityButton)

 cityInput.val("")

 //weather API
var city = citiesDisplay[citiesDisplay.length-1]
var urlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c34d74a8d0eb82fb6170c0fa6b59b0e8";

function weatherGet(){
    $.ajax({
        url: urlWeather,
        method: "GET"
    })
    .then(function(response){

    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var date = new Date((response.dt)*1000);
    var month = date.getMonth();
    var day = date.getDay();

    var iconCode = response.weather[0].icon;
    var iconImage = document.createElement("img");
    iconImage.src = "http://openweathermap.org/img/w/" + iconCode + ".png";
    console.log(iconImage.src)

    nameDate.text((response.name) + " " + (month) + " " + (day) + " " + (iconImage))
    temperature.text("Temperature today is: " + (((response.main.temp)-273.15)*1.8+32).toFixed(1) + " degrees Fahrenheit")
    windSpeed.text("Wind speed today is: " + response.wind.speed + " MPH")
    humidity.text("Humidity today is: " + response.main.humidity + "%")

    function uvGet(){
        var urlUV = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=c34d74a8d0eb82fb6170c0fa6b59b0e8";

        $.ajax({
            url: urlUV,
            method: "GET"
        })
        .then(function(response){
        uv.text("UV index today is: " + (response.value))

        
        })
    } 
    uvGet()
    })
} 
weatherGet()
}); 




