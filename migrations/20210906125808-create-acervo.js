'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Acervos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      editora: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      qtd_paginas: {
        type: Sequelize.INTEGER
      },
      qtd_obras: {
        type: Sequelize.INTEGER
      },
      disponibilidade: {
        type: Sequelize.BOOLEAN
      },
      codigo_obra: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Acervos')
  }
}
