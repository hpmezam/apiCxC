import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cabecera } from "./Cabecera.js";

export const CuentaBancaria = sequelize.define(
  "cuentasBancarias",
  {
    idCB: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombreCB: {
      type: DataTypes.STRING,
    },
    entidadCB: {
      type: DataTypes.STRING,
    },
    descripcionCB: {
      type: DataTypes.STRING,
    },
    estadoCB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  },
  {
    timestamps: false,
  }
);

CuentaBancaria.hasMany(Cabecera,{
  foreignKey: 'idCB',
  sourceKey: 'idCB'

})

Cabecera.belongsTo(CuentaBancaria,{
  foreignKey: 'idCB',
  targetId: 'idCB'
})