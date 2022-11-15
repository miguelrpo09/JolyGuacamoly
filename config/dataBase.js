import { Sequelize} from "sequelize";

const dataBase = new Sequelize('db_user', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define:{
        timetamps: true
    }})

export default dataBase
