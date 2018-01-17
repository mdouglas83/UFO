// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  ////////////////////////////////////////////////////////////////////////////
  // DISTANCE FROM AUSTIN TO OTHER POINTS:
  // SQRT(((lat-30.2672)*(lat-30.2672))+((lng-(-97.7431))*(lng-(-97.7431))))
  ////////////////////////////////////////////////////////////////////////////

  // GET route for getting max value of id
  app.get("/api/sightings_max", function(req, res) {
    db.Sighting.max('id', {}).then(function(dbSighting) {
      res.json(dbSighting);
    });
  });

  // GET route for getting all of the sightings
  app.get("/api/sightings/:min/:max/:block", function(req, res) {
    db.Sighting.findAll({
      where: {
        id: {
          [db.Op.gte]: parseInt(req.params.min),
          [db.Op.lte]: parseInt(req.params.max)
        }
      },
      limit: parseInt(req.params.block)
    }).then(function(dbSighting) {
      res.json(dbSighting);
    });
  });

  // GET route for getting all of the sightings
  app.get("/api/sightings", function(req, res) {
    db.Sighting.findAll({
      where: {
        
      },
      attributes: ['id', 'lat', 'lng']
    }).then(function(dbSighting) {
      res.json(dbSighting);
    });
  });

  // Get rotue for retrieving a single sighting
  app.get("/api/info/:id", function(req, res) {
    console.log("id=" + req.params.id);
    db.Sighting.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbSighting) {
      res.json(dbSighting);
    });
  });

  // POST route for saving a new sighting
  app.post("/api/sightings", function(req, res) {
    db.Sighting.create(req.body).then(function(dbSighting) {
      res.json(dbSighting);
    });
  });

  // DELETE route for deleting sightings
  app.delete("/api/sightings/:id", function(req, res) {
    db.Sighting.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSighting) {
      res.json(dbSighting);
    });
  });

  // PUT route for updating sightings
  app.put("/api/sightings", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbSighting) {
        res.json(dbSighting);
      });
  });
};
