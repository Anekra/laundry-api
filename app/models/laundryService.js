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
        beforeCreate: (service) => {          
          console.log('Before creating Laundry Service:', service.service_name);
        },
        afterCreate: (service) => {          
          console.log('After creating Laundry Service:', service.service_name);
        },
        beforeUpdate: (service) => {          
          console.log('Before updating Laundry Service:', service.service_name);
        },
        afterUpdate: (service) => {          
          console.log('After updating Laundry Service:', service.service_name);
        },
        beforeDestroy: (service) => {
          console.log('Before deleting Laundry Service:', service.service_name);
        },
        afterDestroy: (service) => {
          console.log('After deleting Laundry Service:', service.service_name);
        },
        beforeBulkCreate: (service) => {
          console.log('After bulk creating Laundry Service:', service.service_name);
        },
        beforeBulkUpdate: (service) => {
          console.log('After bulk updating Laundry Service:', service.service_name);
        },
        beforeBulkDestroy: (service) => {
          console.log('After bulk deleting Laundry Service:', service.service_name);
        }
      }
    }
  );
  return Service;
};
