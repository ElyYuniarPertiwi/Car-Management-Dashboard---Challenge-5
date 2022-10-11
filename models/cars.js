'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    static associate(models) {}
  }
  Cars.init({
    car_name: DataTypes.STRING,
    car_price: DataTypes.INTEGER,
    car_size: DataTypes.STRING,
    car_image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};