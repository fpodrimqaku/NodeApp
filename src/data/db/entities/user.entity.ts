const { Sequelize, DataTypes } = require('sequelize');
const sequelizeInstance = new Sequelize('sqlite::memory:');

const User = sequelizeInstance.define('User', {
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