'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes',[{
    mdoleNumber: 'A320-IND123',
    capacity: 180,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    mdoleNumber: 'B737-JET456',
    capacity: 200,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    mdoleNumber: 'A350-VIS789',
    capacity: 250,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    mdoleNumber: 'CRJ900-REG321',
    capacity: 90,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    mdoleNumber: 'ATR72-SPICE654',
    capacity: 72,
    createdAt: new Date(),
    updatedAt: new Date(),
  }],{}) 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
