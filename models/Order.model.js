module.exports = (sequelize, Sequelize) => {
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
        allowNull: true,
        references: {
          model: 'user',
          key: 'userId'
        }
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'game',
          key: 'id'
        }
      }
    });
  
    const Game = require('./Game.model');
  
  
    Order.belongsTo(Game, { foreignKey: 'gameId' });
    Game.hasMany(Order, { foreignKey: 'gameId' });
  
    return Order;
  };
  