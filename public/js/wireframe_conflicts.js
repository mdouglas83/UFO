

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
  var uluru = {lat: 33.968333, lng: -105.243333};
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: uluru,
        zoom: 8, 
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]   



    });

var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });

<<<<<<< HEAD

=======
>>>>>>> 71560b7c42931f643e49561518c243609d68ca62
google.maps.event.addListenerOnce(map, 'mouseover', function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(uluru); 
            console.log("load map");
          });


    infoWindow = new google.maps.InfoWindow;

    //GEOLOCATION
    if (navigator.geolocation) {
<<<<<<< HEAD
        getPos();
=======
        // getPos();
        getPos2();
>>>>>>> 71560b7c42931f643e49561518c243609d68ca62

    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    $("#logo").on("click", getLocation);
        function getLocation() {
            console.log("I am working");
            getPos();
            console.log(pos);
            google.maps.event.addListenerOnce(map, 'mouseover', function() {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(pos); 
            console.log("load map");
          });
          var marker = new google.maps.Marker({
            position: pos,
            map: map
        });
        }
};



<<<<<<< HEAD
=======
      


>>>>>>> 71560b7c42931f643e49561518c243609d68ca62

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

<<<<<<< HEAD


function getPos() {
=======
// function getPos() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log(position);
//         pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };

//         var lat = pos.lat;
//         var lng = pos.lng;
//         var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=5a7c8dc5e0729631e1b2797c906928ed";

//         $.ajax({
//           url: weatherURL,
//           method: "GET"
//         }).done(function(response) {
//           currentCondition=(response.weather[0].main);
//           currentCity=(response.name);
//           console.log(response);

//           var icon = "https://openweathermap.org/img/w/"+response.weather[0].icon+".png";
//           var iconImg = $("<img src=\""+icon+"\">");
//           var mainDiv = $("<div>").attr("id", "city");
//           var iconDiv = $("<div>").attr("id", "icon");
//           var tempDiv = $("<div>").attr("id", "temp");
//           $("#conditions").append(mainDiv);
//           $("#city").append(response.name + ", " + response.sys.country);
//           // $("#conditions").append(iconDiv);
//           // $("#icon").append(iconImg);
//           // $("#conditions").append(tempDiv);
//           // $("#temp").append(Math.floor(response.main.temp * 9/5 - 459.67)+ "°F");
//         });
//     },

//     function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//     });
// };

function getPos2() {
>>>>>>> 71560b7c42931f643e49561518c243609d68ca62
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var lat = pos.lat;
        var lng = pos.lng;
        // var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=5a7c8dc5e0729631e1b2797c906928ed";
        var posURL= "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyCFtg4pQn7C7qjlHlnMqdq7FgjRG_u2pr0"
        $.ajax({
          url: posURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          var currentState=(response.results[0].address_components[6].short_name);
          var currentCity=(response.results[0].address_components[4].short_name);
          var currentCountry=(response.results[0].address_components[7].short_name);
          console.log(currentCountry);
          console.log(currentState);
          console.log(currentCity);



          // currentCity=(response.name);
          // console.log(response);

          // var icon = "https://openweathermap.org/img/w/"+response.weather[0].icon+".png";
          // var iconImg = $("<img src=\""+icon+"\">");
          // var mainDiv = $("<div>").attr("id", "city");
          var mainDiv = $("<div>").attr("id", "city");
          // var iconDiv = $("<div>").attr("id", "icon");
          // var tempDiv = $("<div>").attr("id", "temp");
          // $("#conditions").append(mainDiv);
          $("#conditions").append(mainDiv);
          $("#city").append(currentCity + "  " +currentState+" "+ currentCountry);
          // $("#conditions").append(iconDiv);
          // $("#icon").append(iconImg);
          // $("#conditions").append(tempDiv);
          // $("#temp").append(Math.floor(response.main.temp * 9/5 - 459.67)+ "°F");
        });
    },

    function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
};
<<<<<<< HEAD
=======




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
>>>>>>> 71560b7c42931f643e49561518c243609d68ca62


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

   $("#nav").on("click", function(){
      location.reload()
   });

  //Once the user is happy with the form the submit button submits the form
  $("#submit").on("click", function() {
    endapp();
  });

  // This function grabs sightings from the database and updates the view
  function getSightings() {
    $.get("/api/sightings", function(data) {
      if (data || data.length) {
        initializeMarkers(data);
      }
    });
  }

  // InitializeRows handles appending all of our constructed sightings HTML inside sightingsContainer
  function initializeMarkers(data) {
    let markers = [];
    for (var i = 0; i < data.length; i++) {
      var r1 =  (Math.floor(Math.random() * 20000) - 10000) / 20000;
      var r2 =  (Math.floor(Math.random() * 20000) - 10000) / 20000;
      var loc = {lat: data[i].lat + r1, lng: data[i].lng + r2};
      let marker = new google.maps.Marker({
        id: data[i].id,
        position: loc,
        map: map,
        title: data[i].id.toString()
      });
<<<<<<< HEAD
      marker.addListener('click', function() {
        console.log(this.id);
        $.get("/api/info/" + this.id, function(data) {
          if (data || data.length) {
            var infowindow = new google.maps.InfoWindow({
              content:
                "<p style=\"font-weight: bold; font-size: 16px;\">" + data.sighted + "</p>" +
                "<p style=\"font-size: 13px;\">" + data.description.toString() + "</p>"
            });
            infowindow.open(map, marker);
          }
        });
=======



//Once the user is happy with the form the submit button submits the form
$("#submit").on("click", function(event) {
  event.preventDefault();

      // $("#submit").on("click", function() {




endapp();

>>>>>>> 71560b7c42931f643e49561518c243609d68ca62
      });
      markers.push(marker);
    }
    var cluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

  getSightings();

<<<<<<< HEAD
});
=======
  }); 

 $("#nav").on("click", function(){
    location.reload()

 });











>>>>>>> 71560b7c42931f643e49561518c243609d68ca62
