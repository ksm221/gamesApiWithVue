const gamesController = require("../controllers/GamesController");
const ordersController = require("../controllers/OrdersController");
const usersController = require("../controllers/UsersController");
const profilesController = require("../controllers/ProfilesController");

module.exports = (app) => {
    app.route("/games")
        .get(gamesController.getAll)
        .post(gamesController.createNew)

    app.route("/games/:id")
        .get(gamesController.getById)
        .put(gamesController.updateById)
        .delete(gamesController.deleteById)

    app.route("/orders")
        .get(ordersController.getAll)
        .post(ordersController.createNew)
        
    app.route("/orders/:orderId")
        .get(ordersController.getByorderId)
        .put(ordersController.updateByorderId)
        .delete(ordersController.deleteByorderId)

    app.route("/users")
        .get(usersController.getAll)
        .post(usersController.createNew)
        
    app.route("/users/:userId")
        .get(usersController.getByuserId)
        .put(usersController.updateByuserId)
        .delete(usersController.deleteByuserId)

    app.route("/profiles")
        .get(profilesController.getAll)
        .post(profilesController.createNew)
        
    app.route("/profiles/:profileId")
        .get(profilesController.getByprofileId)
        .put(profilesController.updateByprofileId)
        .delete(profilesController.deleteByprofileId)
 }