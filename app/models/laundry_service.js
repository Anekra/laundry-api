'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsToMany(models.Order, {
        through: models.OrderItem,
        foreignKey: 'service_id',
        otherKey: 'order_id',
        as: 'service-order',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Service.init(
    {
      service_name: DataTypes.STRING,
      service_description: DataTypes.STRING,
      service_price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Service',
      underscored: true
    }
  );
  return Service;
};
