var infoWindow;
var map;
var pos;
var weatherPos;
var area;
var posInterval;
var currentCondition;
var currentCity;

//FIND USER
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20
    });
    infoWindow = new google.maps.InfoWindow;

    //GEOLOCATION
    if (navigator.geolocation) {
        getPos();
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    $("#logo").on("click", getLocation);


        function getLocation() {
          console.log("I am working");
          getPos();
          console.log(pos);
          map.setCenter(pos);
        }
};


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

function getPos() {
    navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var lat = pos.lat;
        var lng = pos.lng;
        var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=5a7c8dc5e0729631e1b2797c906928ed";

        $.ajax({
          url: weatherURL,
          method: "GET"
        }).done(function(response) {
          currentCondition=(response.weather[0].main);
          currentCity=(response.name);

          var icon = "https://openweathermap.org/img/w/"+response.weather[0].icon+".png";
          var iconImg = $("<img src=\""+icon+"\">");
          var mainDiv = $("<div>").attr("id", "city");
          var iconDiv = $("<div>").attr("id", "icon");
          var tempDiv = $("<div>").attr("id", "temp");
          $("#conditions").append(mainDiv);
          $("#city").append(response.name + ", " + response.sys.country);
          $("#conditions").append(iconDiv);
          $("#icon").append(iconImg);
          $("#conditions").append(tempDiv);
          $("#temp").append(Math.floor(response.main.temp * 9/5 - 459.67)+ "°F");
        });
    },

    function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
}


 $(document).ready(function() {

var currentTemp=0;
var currentCond= currentCondition;
var currentPlace=currentCity;


// function to finish the app
function endapp(){

  // hide the assets
  $(".wrapper").addClass("hidden");
  //show the results by removing them from the hidden class
  $(".results").removeClass("hidden");
  //Remove the restart button from the hidden class
  $(".reinit").removeClass("hidden");

}


 //Listen for the main click image to be pressed to initiate the app
      $("#logo").on("click", function() {
      // Remove the assets from the hidden class so that the user can see them
      $(".wrapper").removeClass("hidden");
      //Hide the initiation elements by adding them to the hidden class
      $(".initiate").addClass("hidden");
      $("#init").addClass("hidden");
      $("#weather").addClass("hidden");
      $("#structions").addClass("hidden");

      });


      $("#logo2").on("click", function() {
      // Remove the assets from the hidden class so that the user can see them
      $(".wrapper").removeClass("hidden");
      //Hide the initiation elements by adding them to the hidden class
      $(".initiate").addClass("hidden");
      $("#init").addClass("hidden");
      $("#weather").addClass("hidden");
      $("#structions").addClass("hidden");
      endapp();
      });

//This is the re-init function to restart the app.
      $(".reinit").on("click", function() {
      location.reload();

      });



//Once the user is happy with the form the submit button submits the form
      $("#submit").on("click", function() {
endapp();

      });


    });
