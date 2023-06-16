'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const userRoles = [
      {
        user_id: 'adm_init0606230001',
        role_id: 'roles001'
      },
      {
        user_id: 'customer_init0606230002',
        role_id: 'roles002'
      }
    ];
    
    await queryInterface.bulkInsert('user_roles', userRoles);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
