'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class LaundryService extends Model {
    static associate(models) {
      
    }
  }
  LaundryService.init({
    service_name: DataTypes.STRING,
    service_description: DataTypes.STRING,
    service_price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'LaundryService',
    underscored: true,
  });
  return LaundryService;
};