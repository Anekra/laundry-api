'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: 'user_roles',
        foreignKey: 'user_id',
        otherKey: 'role_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      User.hasMany(models.Status, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        as: 'statuses',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      User.hasOne(models.Admin, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        as: 'admins',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      User.hasOne(models.Customer, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        as: 'customers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      User.hasOne(models.Driver, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        as: 'drivers',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }

    static codeName = 'usr';
  }

  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false
    }
  );
  return User;
};
