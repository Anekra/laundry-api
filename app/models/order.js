'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      
    }
  }
  Order.init({
    customer_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    pickup_date: DataTypes.DATE,
    delivery_date: DataTypes.DATE,
    total_amount: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    underscored: true
  });
  return Order;
};