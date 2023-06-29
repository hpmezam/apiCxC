import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Detalle = sequelize.define(
  "detalles",
  {
    idPD: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numeroFac: {
      type: DataTypes.INTEGER,
    },
    valorApagar: {
      type: DataTypes.DOUBLE,
    },
    saldoFac: {
      type: DataTypes.DOUBLE,
    },
    TotalFac: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: false,
  }
);
