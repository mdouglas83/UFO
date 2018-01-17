$(document).ready(function() {
  /* global moment */

  // sightingsContainer holds all of our sightings
  var sightingsContainer = $(".sightings-container");

  // Variable to hold our sightings
  var sightings;
  
  getSightings();

  // This function grabs sightings from the database and updates the view
  function getSightings() {
    $.get("/api/sightings_table/1/250/250", function(data) {
      console.log("Sightings", data);
      sightings = data;
      if (!sightings || !sightings.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete sightings
  function deleteSighting(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/sightings/" + id
    })
    .done(function() {
      getSightings();
    });
  }

  var cols = ["id", "sighted", "city", "state", "country", "shape", "duration_sec", "duration_text", "description", "posted", "lng", "lat", "createdAt", "updatedAt"];

  // InitializeRows handles appending all of our constructed sightings HTML inside sightingsContainer
  function initializeRows() {
    sightingsContainer.empty();
    var newTable = $("<table>");
    newTable.css({
      margin: "5px auto"
    });
    sightingsContainer.append(newTable);
    var sightingsToAdd = [];
    for (var i = 0; i < sightings.length; i++) {
      createNewRow(sightings[i]);
      sightingsToAdd.push(createNewRow(sightings[i]));
    }
    sightingsContainer.append(createNewHeader(cols));
    sightingsContainer.append(sightingsToAdd);
  }

  // This function constructs a sightings's HTML
  function createNewHeader(arrRow) {
    var newTR = $("<tr>");
    for (var i = 0; i < 14; i++) {
      var newTH = $("<th>");
      newTH.text(arrRow[i]);
      newTH.css({
        padding: "5px",
        maxWidth: "200px",
        background: "#cccccc",
        border: "1px solid #aaaaaa"
      });
      newTR.append(newTH);
    }
    return newTR;
  }

  // This function constructs a sightings's HTML
  function createNewRow(arrRow) {
    var newTR = $("<tr>");
    for (var i = 0; i < 14; i++) {
      var newTD = $("<td>");
      newTD.text(arrRow[cols[i]]);
      newTD.css({
        padding: "5px",
        maxWidth: "200px",
        background: "#eeeeee",
        border: "1px solid #aaaaaa"
      });
      newTR.append(newTD);
    }
    newTR.data("sighting", arrRow);
    return newTR;
  }

  // This function figures out which sighting we want to delete and then calls deleteSighting
  function handleSightingDelete() {
    var currentSighting = $(this)
      .parent()
      .parent()
      .data("sighting");
    deleteSighting(currentSighting.id);
  }

  // This function figures out which sighting we want to edit and takes it to the appropriate url
  function handleSightingEdit() {
    var currentSighting = $(this)
      .parent()
      .parent()
      .data("sighting");
    window.location.href = "/report?sighting_id=" + currentSighting.id;
  }

  // This function displays a messgae when there are no sightings
  function displayEmpty() {
    var query = window.location.search;
    sightingsContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No sightings yet.");
    sightingsContainer.append(messageh2);
  }

});
