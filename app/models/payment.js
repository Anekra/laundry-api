'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {}
  }
  Payment.init(
    {
      order_id: DataTypes.INTEGER,
      payment_date: DataTypes.DATE,
      payment_amount: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Payment',
      underscored: true
    }
  );
  return Payment;
};
