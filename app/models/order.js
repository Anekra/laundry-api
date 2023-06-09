'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: {
          name: 'customer_id',
          allowNull: false
        },
        as: 'order-customer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Order.belongsToMany(models.Apparel, {
        through: models.OrderItem,
        foreignKey: 'order_id',
        otherKey: 'apparel_id',
        as: 'order-apparel',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Order.belongsToMany(models.Service, {
        through: models.OrderItem,
        foreignKey: 'order_id',
        otherKey: 'service_id',
        as: 'order-service',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
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
    underscored: true,
    hooks: {
      beforeCreate: (order) => {          
        console.log('Before creating Order:', order.id);
      },
      afterCreate: (order) => {          
        console.log('After creating Order:', order.id);
      },
      beforeUpdate: (order) => {          
        console.log('Before updating Order:', order.id);
      },
      afterUpdate: (order) => {          
        console.log('After updating Order:', order.id);
      },
      beforeDestroy: (order) => {
        console.log('Before deleting Order:', order.id);
      },
      afterDestroy: (order) => {
        console.log('After deleting Order:', order.id);
      }
    }
  });
  return Order;
};