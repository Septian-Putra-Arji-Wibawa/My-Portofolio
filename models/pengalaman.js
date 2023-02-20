'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengalaman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pengalaman.init({
    judul: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengalaman',
  });
  return pengalaman;
};