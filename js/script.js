$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/1",
    dataType: "json",
    success: function (response) {
      console.log(response);
    }
  });


});