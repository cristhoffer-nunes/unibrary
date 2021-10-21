'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Reserva.belongsTo(models.Acervo, {
        foreignKey: 'acervo_id'
      })
      Reserva.belongsTo(models.Clientes, {
        foreignKey: 'cliente_id'
      })
    }
  };
  Reserva.init({
    data_reserva: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Reserva'
  })
  return Reserva
}
