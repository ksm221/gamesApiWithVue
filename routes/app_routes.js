const gamesController = require("../controllers/GamesController");
const ordersController = require("../controllers/OrdersController");
const usersController = require("../controllers/usersController");

module.exports = (app) => {
    app.route("/games")
        .get(gamesController.getAll)         //get ALL games
        .post(gamesController.createNew)     //make ONE NEW game

    app.route("/games/:id")
        .get(gamesController.getById)        //get ONE game by ID
        .put(gamesController.updateById)     //UPDATE a game by ID
        .delete(gamesController.deleteById)  //DELETE one game by ID

    app.route("/orders")
        .get(ordersController.getAll)   //get ALL orders
        .post(ordersController.createNew) // make ONE NEW influencer
        
    app.route("/orders/:orderId")
        .get(ordersController.getByorderId)  //get ONE influencer by ID
        .put(ordersController.updateByorderId) //UPDATE a game by ID
        .delete(ordersController.deleteByorderId) //DELETE one influencer by ID

    app.route("/users")
        .get(usersController.getAll)   //get ALL orders
        .post(usersController.createNew) // make ONE NEW influencer
        
    app.route("/users/:userId")
        .get(usersController.getByuserId)  //get ONE influencer by ID
        .put(usersController.updateByuserId) //UPDATE a game by ID
        .delete(usersController.deleteByuserId) //DELETE one influencer by ID
 }