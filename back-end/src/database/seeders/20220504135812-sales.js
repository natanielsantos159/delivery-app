'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 12,
        delivery_address: 'Rua da paz, N1',
        delivery_number: '2',
        sale_date: new Date(),
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 20,
        delivery_address: 'Rua da paz, N1',
        delivery_number: '2',
        sale_date: new Date(),
        status: 'Entregue',
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 20,
        delivery_address: 'Rua da paz, N1',
        delivery_number: '2',
        sale_date: new Date(),
        status: 'Preparando',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
