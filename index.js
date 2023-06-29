import app from './app.js';
import { sequelize }  from "./database/database.js"

async function main(){
        // await sequelize.sync({force: true})
        console.log("Conexión Establecida");
        await app.listen(app.get('port'));
        console.log('http://localhost:'+app.get('port')+'/api/cabeceras/', app.get('port'));
}
main();