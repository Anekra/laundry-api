'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: 'user_id',
        otherKey: 'role_id',
        as: 'user-role',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      User.hasMany(models.Order, {
        foreignKey: {
          name: 'customer_id',
          allowNull: false
        },
        as: 'customer-order',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      modelName: 'User',
      underscored: true,
      hooks: {
        beforeCreate: (user) => {          
          console.log('Before creating User:', user.name);
        },
        afterCreate: (user) => {          
          console.log('After creating User:', user.name);
        },
        beforeUpdate: (user) => {          
          console.log('Before updating User:', user.name);
        },
        afterUpdate: (user) => {          
          console.log('After updating User:', user.name);
        },
        beforeDestroy: (user) => {
          console.log('Before deleting User:', user.name);
        },
        afterDestroy: (user) => {
          console.log('After deleting User:', user.name);
        },
        beforeBulkCreate: (user) => {
          console.log('After bulk creating User:', user.name);
        },
        beforeBulkUpdate: (user) => {
          console.log('After bulk updating User:', user.name);
        },
        beforeBulkDestroy: (user) => {
          console.log('After bulk deleting User:', user.name);
        }
      }
    }
  );
  return User;
};
