'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apparel extends Model {
    static associate(models) {
      Apparel.belongsToMany(models.Order, {
        through: models.OrderItem,
        foreignKey: 'apparel_id',
        otherKey: 'order_id',
        as: 'apparel-order',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Apparel.init(
    {
      apparel_name: DataTypes.STRING,
      apparel_type: DataTypes.STRING,
      unit_price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Apparel',
      underscored: true
    }
  );
  return Apparel;
};
