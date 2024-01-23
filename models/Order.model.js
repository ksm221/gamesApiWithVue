module.exports = (sequelize,Sequelize) => {
    const Order = sequelize.define("order", {
        orderId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        paymentReceived: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        orderReceived: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            references: 'user',
            referencesKey: 'userId',
            allowNull: true
            
        },
        gamesId: {
            type: Sequelize.INTEGER,
            references: 'game',
            referencesKey: 'id',
            allowNull: true
        }
    });
    return Order;
};