

var infoWindow;
var map;
var bounds;
var markers = [];
var cluster;
var pos;
var weatherPos;
var area;
var posInterval;
var currentCondition;
var currentCity;
var sightings;
var map_styles = [
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
              "colorc": "#4e6d70"
            }
          ]
        }
      ];

    //FIND USER
    function initMap() {
      var uluru = {lat: 33.968333, lng: -105.243333};
        map = new google.maps.Map(document.getElementById('map'),{
            center: uluru,
            zoom: 7,
            styles: map_styles  
        });

      var marker = new google.maps.Marker({
                  position: uluru,
                  map: map
              });

      google.maps.event.addListenerOnce(map, 'mouseover', function() {
                  google.maps.event.trigger(map, 'resize');
                  map.setCenter(uluru); 
                  console.log("load map");
                });

      google.maps.event.addListener(map, 'bounds_changed', function() {
        if (cluster) {
          if (!(bounds == map.getBounds())) {
            bounds = map.getBounds();
            var ne = bounds.getNorthEast();
            var sw = bounds.getSouthWest();
            for (var i = 0; i < markers.length; i++) {
              if (markers[i].position.lat() < ne.lat() && markers[i].position.lat() > sw.lat() && markers[i].position.lng() < ne.lng() && markers[i].position.lng() > sw.lng()) {
                markers[i].visible = true;
              } else {
                markers[i].visible = false;
              }
            }
          }
        }
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
        //console.log(pos);

        google.maps.event.addListenerOnce(map, 'mouseover', function() {
          google.maps.event.trigger(map, 'resize');
          map.setCenter(pos); 
          console.log("load map");
        });
        
        var marker = new google.maps.Marker({
          position: pos,
          map: map
        });
        
        getSightings();
      }
// =================================================================
// Variable to hold our sightings
  
  

  // This function grabs sightings from the database and updates the view


  
// ================================================================
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


        $.ajax({
            url: "https://geoip-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {


          var currentState=location.state;
          var currentCity=location.city;
          var currentCountry=location.country_name;

          var mainDiv = $("<div>").attr("id", "city");

          $("#conditions").append(mainDiv);
          $("#city").append(currentCity + ", " +currentState+", "+ currentCountry);
 
            }
        });  

    },

    function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// JON, I HAD TO MOVE THE google.maps.event.addListener FUNCTION BACK UP INTO document.onready... sorry!


const blockSize = 1000;
var maxId = 0;

function getSightings() {
  $("#p-bar").width('0%');

  cluster = new MarkerClusterer(map, [], 
    {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    }
  );

  $.get("/api/sightings_max", function (data) {
    if (data || data.length) {
      maxId = parseInt(data);
      let i = 0, n = blockSize;
      while (i < maxId) {
        if (i + blockSize > maxId) n = maxId - i;
        $.get("/api/sightings/" + (i + 1) + "/" + (i + n) + "/" + n, function(data) {
          //console.log(data);
          if (data || data.length) {
            initializeMarkers(data);
          }
        });
        i += n;

      }
    }
  });

}

// InitializeRows handles appending all of our constructed sightings HTML inside sightingsContainer
function initializeMarkers(data) {

  var markers_temp = [];

  // Might want to make ne and sw global so they don't have to be recalculated each pass?
  bounds = map.getBounds();
  var ne = bounds.getNorthEast();
  var sw = bounds.getSouthWest();

  for (let i = 0; i < data.length; i++) {

    var r1 = (Math.floor(Math.random() * 1000) - 5000) / 100000;
    var r2 = (Math.floor(Math.random() * 1000) - 5000) / 100000;
    var loc = {lat: data[i].lat + r1, lng: data[i].lng + r2};

    let marker = new google.maps.Marker({
      id: data[i].id,
      position: loc,
      map: map,
      title: data[i].id.toString(),
      visible: false
    });

    marker.addListener('click', function() {
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
    });

    if (marker.position.lat() < ne.lat() && marker.position.lat() > sw.lat() && marker.position.lng() < ne.lng() && marker.position.lng() > sw.lng())
      marker.visible = true;
    
    markers_temp.push(marker);

  }

  cluster.addMarkers(markers_temp);

  markers = markers.concat(markers_temp);
  $("#p-bar").width(Math.ceil(markers.length / maxId * 100) + '%');
  // if (!(data[i].id < maxId)) {
  /*if (!(markers.length < maxId)) {
    cluster = new MarkerClusterer(map, markers, 
      {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      }
    );
  }*/

  //console.log(i, data.length);

  //console.log(map);
  //console.log(markers);
  //console.log(cluster);

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
    $(".results2").removeClass("hidden");
    //Remove the restart button from the hidden class
    $(".reinit").removeClass("hidden");
    $(".reinit2").removeClass("hidden");

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

 $("#nav").on("click", function(){
    location.reload()
 });


});
