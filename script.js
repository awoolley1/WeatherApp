
var searchbtn = $("#search-btn")
var cityInput = $("#city-input")
var appendCitiesHere = $("#display-cities")


//onclick search functionality
searchbtn.click(function() {
    var recentCity = cityInput.val()
    var savedCities = JSON.parse(localStorage.getItem("citySearchesArray")) || [];
    savedCities.push(recentCity);
    localStorage.setItem("citySearchesArray", JSON.stringify(savedCities));
}); 


var citiesDisplay = (JSON.parse(localStorage.getItem("citySearchesArray")))

 for (let i = 0; i < citiesDisplay.length; i++) {

    var cityButton=$('<input/>').attr({
        type: "button",
        id: "cityName",
        class: "btn btn-success  btn-outline-light" ,
        value: citiesDisplay[i] 
    })
    appendCitiesHere.append(cityButton)
 }

