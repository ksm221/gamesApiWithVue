const {db} = require("../db")
const Order = db.orders

//gets a list of all the orders
exports.getAll = async (req,res) => {
    const orders = await Order.findAll({attributes:["orderId", "paymentReceived", "orderReceived", "userId", "gamesId"]})
    res.send(orders)
}

//get a specific Order by its orderId
exports.getByorderId = async (req, res) => {
    const orders = await Order.findByPk(req.params.orderId)
    res.send(orders)
}

//create a new Order
exports.createNew = async (req, res) => {
    let Order
    try {
        Order = await Order.create(req.body)
    } catch (error) {
        if (error instanceof Sequelize.ValidationIdationError) {
            console.log(error)
            res.status(400).send({"error":error.errors.map((item) => item.message)})
        } else {
            console.log("ordersCreate: ", error)
            res.status(500).send({"error":"Something has gone wrong in our monkey pit, lead orangutan has been deployed to fix it up"})
        }
        return
    }
    res
        .status(201)
        .location(`${getBaseUrl(req)}/orders/${Order.orderId}`)
        .json(Order)
        console.log(Order)
}

//delete an existing Order by orderId
exports.deleteByorderId = async (req, res) => {
    let result
    try {
        result = await Order.destroy({where: {orderId: req.params.orderId}})
    } catch (error) {        
        console.log("ordersDelete: ", error)
        res.status(500).send({"error":"Something has gone wrong in our monkey pit, lead orangutan has been deployed to fix it up"})
        return
    }
    if (result === 0 || result === undefined) {
        res.status(404).send({error:"Order not found"})}
    res.status(204).send()
}

//
exports.updateByorderId = async (req, res) => {
    let changedOrder
    delete req.body.orderId
    try {
        changedOrder = await Order.update(req.body,{where: {orderId: req.params.orderId}})
    } catch (error) {        
        console.log("ordersUpdate: ", error)
        res.status(500).send({"error":"Something has gone wrong in our monkey pit, lead orangutan has been deployed to fix it up"})
        return
    }
    if (changedOrder === 0 || changedOrder === undefined) {
        res.status(404).send({error:"Order not found"})
        return
    }
    const Order = await Order.findByPk(req.params.orderId)
    res.status(200)
    .location(`${getBaseUrl(req)}/orders/${Order.orderId}`)
    .json(Order)
}

getBaseUrl = (request) => {
    return (
        (request.connection && request.connection.encryption ? "https" : "http") +
        `://${request.headers.host}`
    )
}