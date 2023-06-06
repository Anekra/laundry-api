'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    
    static associate(models) {
      Status.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Status.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
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
      modelName: 'Status',
      timestamps: false
    }
  );
  return Status;
};
