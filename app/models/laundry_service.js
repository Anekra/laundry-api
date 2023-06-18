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
        },
        beforeBulkCreate: (role) => {
          console.log('After bulk creating Role:', role.name);
        },
        beforeBulkUpdate: (role) => {
          console.log('After bulk updating Role:', role.name);
        },
        beforeBulkDestroy: (role) => {
          console.log('After bulk deleting Role:', role.name);
        }
      }
    }
  );
  return Service;
};
