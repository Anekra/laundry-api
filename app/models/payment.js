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
      underscored: true,
      hooks: {
        beforeCreate: (role) => {          
          console.log('Before creating Role:', role.name);
        },
        afterCreate: (role) => {          
          console.log('After creating Role:', role.name);
        },
        beforeUpdate: (role) => {          
          console.log('Before updating Role:', role.name);
        },
        afterUpdate: (role) => {          
          console.log('After updating Role:', role.name);
        },
        beforeDestroy: (role) => {
          console.log('Before deleting Role:', role.name);
        },
        afterDestroy: (role) => {
          console.log('After deleting Role:', role.name);
        }
      }
    }
  );
  return Payment;
};
