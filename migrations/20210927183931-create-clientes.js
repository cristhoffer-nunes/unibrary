'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      numero_matricula: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      rg: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      universidade: {
        type: Sequelize.STRING
      },
      unidade: {
        type: Sequelize.STRING
      },
      curso: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      data_nascimento: {
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
    await queryInterface.dropTable('Clientes')
  }
}
