'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  Clientes.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    numero_matricula: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    rg: DataTypes.STRING,
    cpf: DataTypes.STRING,
    universidade: DataTypes.STRING,
    unidade: DataTypes.STRING,
    curso: DataTypes.STRING,
    endereco: DataTypes.STRING,
    data_nascimento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes'
  })
  return Clientes
}
