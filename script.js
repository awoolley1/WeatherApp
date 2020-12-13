
var searchbtn = $("#search-btn")
var cityInput = $("#city-input")


//onclick search functionality
searchbtn.click(function() {
    var recentCity = cityInput.val()
    var savedCities = localStorage.getItem("citySearchesArray") || [];
     console.log(savedCities)
     savedCities.push(recentCity);
    localStorage.setItem("citySearchesArray", JSON.stringify(savedCities));
});