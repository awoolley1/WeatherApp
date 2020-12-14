
var searchbtn = $("#search-btn")
var cityInput = $("#city-input")
var appendCitiesHere = $("#display-cities")


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

}); 




 //weather API

//  var city = cityInput.val()
//  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c34d74a8d0eb82fb6170c0fa6b59b0e8"

// function weather(){
//     $.ajax({
//         url: url,
//         method: "GET"
//     })
//     .then(function(response){
//    // var responseName = response.name;
//     console.log(response)
//     })
// } 