'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Acervo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  Acervo.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editora: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    categoria: DataTypes.STRING,
    qtd_paginas: DataTypes.INTEGER,
    qtd_obras: DataTypes.INTEGER,
    disponibilidade: DataTypes.BOOLEAN,
    codigo_obra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Acervo'
  })
  return Acervo
}
