'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Apparel extends Model {
    static associate(models) {
      
    }
  }
  Apparel.init({
    apparel_name: DataTypes.STRING,
    apparel_type: DataTypes.STRING,
    unit_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Apparel',
    underscored: true
  });
  return Apparel;
};