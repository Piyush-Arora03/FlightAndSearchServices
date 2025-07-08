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

    await queryInterface.bulkInsert('Airports',[
      {
        name:'Jaipur International Airport',
        cityId:2,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Ayodhya International Airport',
        cityId:3,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name:'Patna International Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{});
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
