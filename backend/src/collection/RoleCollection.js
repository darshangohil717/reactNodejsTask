const { DataTypes, Sequelize } = require("sequelize");
const db = require("../config/database");

const RoleCollection = db.define("User",
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName:{
        type: DataTypes.STRING
    }
});

module.exports = RoleCollection;