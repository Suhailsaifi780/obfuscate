import { Sequelize } from "sequelize";

const db = new Sequelize('heroku_47b88148051d26c', 'ba0433346ecd98', '99b6f0a2', {
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql"
});

export default db;


