'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: 'user_id',
        otherKey: 'role_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
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
      underscored: true
    }
  );
  return User;
};
