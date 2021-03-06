'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'sales', key: 'id' },
      },
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'products', key: 'id' },
 
      },
      quantity: Sequelize.INTEGER,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
