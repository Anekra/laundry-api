'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      UserRole.belongsTo(models.User, {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        },
        as: 'user-user_roles',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      UserRole.belongsTo(models.Role, {
        foreignKey: {
          name: 'role_id',
          allowNull: false
        },
        as: 'role-user_role',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  UserRole.init(
    {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      role_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'roles',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'UserRole',
      tableName: 'user_roles',
      timestamps: false
    }
  );
  return UserRole;
};
