"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

     await queryInterface.addColumn("Variants", "slug", {
      type: Sequelize.STRING,
    }),
      queryInterface.addColumn("Variants", "description", {
        type: Sequelize.TEXT("long"),
      }),
      queryInterface.addColumn("Variants", "inventory", {
        type: Sequelize.INTEGER,
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeColumn("Variants", "slug"),
     queryInterface.removeColumn("Variants", "description"),
     queryInterface.removeColumn("Variants", "inventory");
  },
};
