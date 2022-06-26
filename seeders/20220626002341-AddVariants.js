'use strict';

const description = `There is one thing the photo must contain – the humanity of the moment. – Robert Frank`;

const [createdAt, updatedAt] = [new Date(), new Date()];

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
   return await queryInterface.bulkInsert('Variants', [
    {
      id: 1,
      title: 'Christmas Time Is Near',
      slug: 'christmas-session',
      description,
      price: 99.00,
      productId: 1,
      inventory: 10,
      createdAt,
      updatedAt,
    },
    {
      id: 2,
      title: 'A Walk In The Park',
      slug: 'sawgrass-lake-park-session',
      description,
      price: 175.00,
      productId: 2,
      inventory: 25,
      createdAt,
      updatedAt,
    },
    {
      id: 3,
      title: 'Indian Shores Beach',
      slug: 'indian-shores-beach-session',
      description,
      price: 225.00,
      productId: 3,
      inventory: 15,
      createdAt,
      updatedAt,
    },
    {
      id: 4,
      title: 'Happy Halloween',
      slug: 'happy-halloween-session',
      description,
      price: 99.00,
      productId: 4,
      inventory: 10,
      createdAt,
      updatedAt,
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Variants', null, {})
  },
};
