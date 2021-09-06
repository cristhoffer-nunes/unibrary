'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Acervos', [
      {
        titulo: 'Introdução à Programação com Python: Algoritmos e Lógica de Programação Para Iniciantes',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: 8575227181,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Algoritmos E Lógica Da Programação',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: 8575227181,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Fundamentos da Programação de Computadores: Algoritmos, Pascal, C, C++ e Java',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: 8575227181,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Código limpo: Habilidades práticas do Agile Software',
        autor: 'Nilo Ney',
        editora: 'novatec',
        ano: 1994,
        tipo: 'científico',
        categoria: 'exatas',
        qtd_paginas: 384,
        qtd_obras: 100,
        disponibilidade: true,
        codigo_obra: '8575227181',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Acervos', null, {})
  }
}
