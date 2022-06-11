const { DataTypes, Sequelize } = require("sequelize");
const db = require("../config/database");

const UserCollection = db.define("User",
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName:{
        type: DataTypes.STRING,
    },
    lastName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
    },
    dob:{
        type:DataTypes.DATEONLY
    },
    password: {
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.STRING
    },
    isAdmin:{
        type: DataTypes.BOOLEAN
    }
})

module.exports = UserCollection;