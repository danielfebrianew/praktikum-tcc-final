import {Sequelize} from "sequelize";

const db = new Sequelize('tcc','rifqy','rifqy',{
    host: '34.68.104.46',
    dialect: 'mysql'
});

export default db;