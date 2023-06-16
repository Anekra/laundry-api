'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('user_roles', {
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    role_id: {
      allowNull: false,
      type: Sequelize.STRING,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('user_roles');
}