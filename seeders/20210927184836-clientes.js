'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clientes', [
      {
        nome: 'Luiz Caleb Filipe Assis',
        email: 'lluizcalebfilipeassis@bluewash.com.br',
        senha: '12345',
        numero_matricula: '12345',
        ativo: true,
        rg: '448842452',
        cpf: '64310970',
        universidade: 'Universidade Cruzeiro do Sul',
        unidade: 'São Miguel',
        curso: 'Análise e desenvolvimento de sistemas',
        endereco: 'Avenida dos Jesuítas,391',
        data_nascimento: '05/08/1992',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Kevin Miguel Felipe da Luz',
        email: 'kkevinmiguelfelipedaluz@gruposimoes.com.br',
        senha: '32143933',
        numero_matricula: '03480854',
        ativo: false,
        rg: '178745984',
        cpf: '41023771829',
        universidade: 'Universidade São Judas',
        unidade: 'Tatuapé',
        curso: 'Ciência da Computação',
        endereco: 'Rua Helvétia,105',
        data_nascimento: '14/02/1992',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Kalleb Miguel Felipe da Luz',
        email: 'kkallebnmiguelfelipedaluz@gruposimoes.com.br',
        senha: '123456',
        numero_matricula: '123456',
        ativo: false,
        rg: '178745984',
        cpf: '41023771829',
        universidade: 'Universidade São Judas',
        unidade: 'Tatuapé',
        curso: 'Ciência da Computação',
        endereco: 'Rua Helvétia,105',
        data_nascimento: '14/02/1992',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
