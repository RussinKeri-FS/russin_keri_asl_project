'use strict';

const description = `When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence. – Ansel Adams`;

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
   return await queryInterface.bulkInsert('Products', [
    {
      id: 1,
      title: 'Christmas Time Is Near',
      slug: 'christmas-session',
      price: 99.00,
      is_published: true,
      description,
      createdAt,
      updatedAt,
    },
    {
      id: 2,
      title: 'A Walk In The Park',
      slug: 'sawgrass-lake-park-session',
      price: 175.00,
      is_published: true,
      description,
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
    return await queryInterface.bulkDelete('Products', null, {});
  },
};
