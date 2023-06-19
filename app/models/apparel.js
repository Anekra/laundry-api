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
      apparel_price: DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: 'Apparel',
      underscored: true,
      hooks: {
        beforeCreate: (apparel) => {          
          console.log('Before creating Apparel:', apparel.apparel_name);
        },
        afterCreate: (apparel) => {          
          console.log('After creating Apparel:', apparel.apparel_name);
        },
        beforeUpdate: (apparel) => {          
          console.log('Before updating Apparel:', apparel.apparel_name);
        },
        afterUpdate: (apparel) => {          
          console.log('After updating Apparel:', apparel.apparel_name);
        },
        beforeDestroy: (apparel) => {
          console.log('Before deleting Apparel:', apparel.apparel_name);
        },
        afterDestroy: (apparel) => {
          console.log('After deleting Apparel:', apparel.apparel_name);
        },
        beforeBulkCreate: (apparel) => {
          console.log('After bulk creating Apparel:', apparel.apparel_name);
        },
        beforeBulkUpdate: (apparel) => {
          console.log('After bulk updating Apparel:', apparel.apparel_name);
        },
        beforeBulkDestroy: (apparel) => {
          console.log('After bulk deleting Apparel:', apparel.apparel_name);
        }
      }
    }
  );
  return Apparel;
};
