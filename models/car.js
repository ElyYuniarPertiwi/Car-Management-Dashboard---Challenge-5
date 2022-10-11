'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
    }
  }
  Car.init({
    car_name: DataTypes.STRING,
    car_price: DataTypes.INTEGER,
    car_size: DataTypes.STRING,
    car_image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};