import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load db config
dotenv.config()

// Note: Create DB_DATABASE in phpmyadmin first!
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: q => console.log(`Sequelize: ${q}`)
})

// Connect!
try {
    await sequelize.authenticate();
    console.log("Connected to DB");
} catch (err) {
    console.log(`Unable to connect to DB: ${err}`);
    process.exit(1);
}

export default sequelize;