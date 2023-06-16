'use strict';
/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('roles', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, _) {
  await queryInterface.dropTable('roles');
}
