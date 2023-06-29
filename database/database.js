import Sequelize from "sequelize";

export const sequelize = new Sequelize('DBCuentasCobrar', 'postgres', '08b12o10H', {
    host: 'localhost',
    dialect: 'postgres'
})

// export const sequelize = new Sequelize(
//   "postgres://adminsql:08b12o10H@serhpmezam.database.windows.net/DBCuentasCobrar?sslmode=require"
// ); 
// export const sequelize = new Sequelize({
//   dialect: "mssql",
//   dialectOptions: {
//     options: {
//       encrypt: true,
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   },
//   host: "serhpmezam.database.windows.net",
//   database: "DBCuentasCobrar",
//   username: "adminsql",
//   password: "08b12o10H",
// });
// Example for sql
