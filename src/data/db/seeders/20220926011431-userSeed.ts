'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    const usersWrite = [
      ["John1111", "Hancock",new Date(),new Date()],
      ["Liz", "Smith",new Date(),new Date()],
      ["Ahmed", "Khan",new Date(),new Date()]
    ];

     await queryInterface.bulkInsert('Users',
        usersWrite.map(([firstName, lastName,createdAt,updatedAt]) => ({ firstName, lastName ,createdAt,updatedAt}))
     );
    
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});

  }
};
