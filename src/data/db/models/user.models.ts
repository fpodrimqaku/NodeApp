const {  DataTypes } = require('sequelize');
//const sequelizeInstance = new Sequelize('../../../repository/db/database.sqlite');
import {sequelize } from "./index";
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

export { User };
