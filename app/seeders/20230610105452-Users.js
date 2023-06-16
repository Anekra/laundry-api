'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        id: 'adm_init0606230001',
        name: 'admin init',
        email: 'adm_init@mail.com',
        password: bcrypt.hashSync('123', 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'customer_init0606230002',
        name: 'customer init',
        email: 'customer_init@mail.com',
        password: bcrypt.hashSync('123', 8),
        created_at: new Date(),
        updated_at: new Date()
      }
    ];
    
    await queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
