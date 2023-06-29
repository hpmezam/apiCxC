import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Cliente = sequelize.define(
  "clientes",
  {
    cedulaCli: {
      type: DataTypes.STRING,
      primaryKey: true,
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
  },
  {
    timestamps: false,
  }
);

