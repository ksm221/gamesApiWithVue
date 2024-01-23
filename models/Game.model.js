module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        os: {
            type: Sequelize.STRING,
            allowNull: true
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: true
        },
        matureContent: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        }
    });

    return Game;
};