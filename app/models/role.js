'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'role',
      underscored: true
    }
  );
  return Role;
};
