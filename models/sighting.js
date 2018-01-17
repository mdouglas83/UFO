module.exports = function(sequelize, DataTypes) {
  var sighting = sequelize.define("Sighting", {
    sighted: {
      type: DataTypes.STRING
    },
    shape: {
      type: DataTypes.STRING
    },
    duration_sec: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    lng: {
      type: DataTypes.DOUBLE
    },
    lat: {
      type: DataTypes.DOUBLE
    }
  });
  return sighting;
};