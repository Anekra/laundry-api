'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: 'roles001',
          name: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 'roles002',
          name: 'customer',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    );
  },

  async down (queryInterface, _) {
    await queryInterface.bulkDelete('Roles', null, {})
  }
};
