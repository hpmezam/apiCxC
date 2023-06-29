
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Todo = sequelize.define(
  "todo",
  {
    idPD: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    idPC: {
      type: DataTypes.STRING,
    },
    descripcionPC: {
      type: DataTypes.STRING,
    },
    fechaPC: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    totalPD: {
      type: DataTypes.DOUBLE,
    },
    cedulaCli: {
      type: DataTypes.STRING,
    },
    nombresCli: {
      type: DataTypes.STRING,
    },
    totalPagarCre: {
      type: DataTypes.DOUBLE,
    },
    saldo: {
      type: DataTypes.DOUBLE,
    },
    debe: {
      type: DataTypes.DOUBLE,
    },
    idCB: {
      type: DataTypes.STRING,
    },
    idPD: {
      type: DataTypes.INTEGER,
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
  },

  {
    timestamps: false,
  }
);
