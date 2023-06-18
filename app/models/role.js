'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: models.UserRole,
        foreignKey: 'role_id',
        otherKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Role.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: DataTypes.STRING,
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
      modelName: 'Role',
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
  return Role;
};
