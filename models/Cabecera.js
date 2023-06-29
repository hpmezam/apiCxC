import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Detalle } from "./Detalle.js";

export const Cabecera = sequelize.define(
    "cabeceras",
    {
        idPC: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        descripcionPC: {
            type: DataTypes.STRING,
        },
        fechaPC: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.DATEONLY,
        },
        totalPD: {
            type: DataTypes.DOUBLE,
        },
        cedulaCli: {
            type: DataTypes.STRING,
        },
        idCB: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            reference:{
                model: 'CuentaBancaria',
                key: 'idCB  '
            }   
        },
    },
    
    {
        timestamps: false,
    }
);


Cabecera.hasMany(Detalle, {
    foreignKey: "idCabecera",
    sourceKey: "idPC",
});

Detalle.belongsTo(Cabecera, {
    foreignKey: "idCabecera",
    targetId: "idPC",
});
