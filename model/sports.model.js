import { DataTypes } from 'sequelize';
import sequelize from './../db/connect.js';

const schema = sequelize.define('sport', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    teamBased: DataTypes.BOOLEAN,
    popularityRank: DataTypes.INTEGER,
    averageDuration: DataTypes.INTEGER, // in minutes
    olympicSport: DataTypes.BOOLEAN
});

await schema.sync({ force: true });

export default schema;