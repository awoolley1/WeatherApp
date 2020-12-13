
var searchbtn = $("#searchbtn")
var cityInput = $("#cityinput")

//onclick search functionality
searchbtn.click(function() {
    localStorage.setItem("citySearchesArray", cityInput.val())
});