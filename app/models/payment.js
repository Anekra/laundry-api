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
        beforeCreate: (payment) => {          
          console.log('Before creating Payment:', payment.id);
        },
        afterCreate: (payment) => {          
          console.log('After creating Payment:', payment.id);
        },
        beforeUpdate: (payment) => {          
          console.log('Before updating Payment:', payment.id);
        },
        afterUpdate: (payment) => {          
          console.log('After updating Payment:', payment.id);
        },
        beforeDestroy: (payment) => {
          console.log('Before deleting Payment:', payment.id);
        },
        afterDestroy: (payment) => {
          console.log('After deleting Payment:', payment.id);
        }
      }
    }
  );
  return Payment;
};
