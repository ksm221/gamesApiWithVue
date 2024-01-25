module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define("user", {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userPassword: {
            type: Sequelize.STRING,
            allowNull: false
        },
        userEmail: {
            type: Sequelize.STRING,
            allowNull: false
            
        },
        user2FA: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        orderId: {
            type: Sequelize.INTEGER,
            references: 'orders',
            referencesKey: 'orderId',
            allowNull: true
        }
    });
    return User;
};