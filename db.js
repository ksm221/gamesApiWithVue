const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mariadb",
        dialectOptions: {
            connectTimeout: 30000
        },
        define: {
            timestamps: false
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.games = require("./models/Game.model")(sequelize,Sequelize)
db.users = require("./models/User.model")(sequelize,Sequelize)
db.orders = require("./models/Order.model")(sequelize,Sequelize)
db.orders = require("./models/Profile.model")(sequelize,Sequelize)

async function Sync() {
    await sequelize.sync({alter:true}) 
}

module.exports = {db,Sync}