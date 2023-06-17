'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate(models) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: {
          name: 'order_id',
          allowNull: false
        },
        as: 'order_item-order',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      OrderItem.belongsTo(models.Apparel, {
        foreignKey: {
          name: 'apparel_id',
          allowNull: false
        },
        as: 'order_item-apparel',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      OrderItem.belongsTo(models.Service, {
        foreignKey: {
          name: 'service_id',
          allowNull: false
        },
        as: 'order_item-service',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  OrderItem.init(
    {
      order_id: DataTypes.INTEGER,
      apparel_id: DataTypes.INTEGER,
      service_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'OrderItem',
      timestamps: false
    }
  );
  return OrderItem;
};
