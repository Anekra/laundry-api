'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      
    }
  }
  OrderItem.init({
    order_id: DataTypes.INTEGER,
    laundry_item_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderItem',
    timestamps: false,
  });
  return OrderItem;
};