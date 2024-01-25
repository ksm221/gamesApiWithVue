// const {db} = require("../db")
// const User = db.users

// exports.getAll = async (req,res) => {
//     const users = await User.findAll({attributes:["userId", "userName", "userPassword", "userEmail", "user2FA", "orderId"]})
//     res.send(users)
// }

// exports.getByuserId = async (req, res) => {
//     const users = await User.findByPk(req.params.userId)
//     res.send(users)
// }

// exports.createNew = async (req, res) => {
//     let user
//     try {
//         user = await User.create(req.body)
//     } catch (error) {
//         if (error instanceof db.Sequelize.ValidationError) {
//             console.log(error)
//             res.status(400).send({"error":error.errors.map((item)=> item.message)})
//         } else {
//             console.log("usersCreate: ", error)
//             res.status(500).send({"error":"Something has gone wrong in our monkey pit, lead orangutan has been deployed to fix it up"})
//         }
//         return
//     }
//     res
//     .status(201)
//     .location(`${getBaseUrl(req)}/users/${user.userId}`)
//     .json(user);
//     console.log(user)
// }

// exports.deleteByuserId = async (req, res) => {
//     let result
//     try {
//         result = await User.destroy({where: {userId: req.params.userId}})
//     } catch (error) {
//         console.log("usersDelete: ", error)
//         res.status(500).send({error:"Something has gone wrong in our monkey pit, lead orangutan has been deployed to fix it up"})
//         return
//     }
//     if (result === 0) {
//         res.status(404).send({error:"User not found"})
//         return
//     }
//     res
//     .status(204).send()
// }

// exports.updateByuserId = async (req, res) => {
//     let result
//     delete req.body.userId
//     try {
//         result = await User.update(req.body,{where: {userId: req.params.userId}})
//     } catch (error) {
//         console.log("usersUpdate: ", error)
//         res.status(500).send({error:"Something has gone wrong in our monkey pit, lead orangutan has been deployed to fix it up"})
//         return
//     }
//     if (result === 0) {
//         res.status(404).send({error:"User not found"})
//         return
//     }
//     const user = await User.findByPk(req.params.userId)
//     res.status(200)
//     .location(`${getBaseUrl(req)}/users/${user.userId}`)
//     .json(user)
// }

// getBaseUrl = (request) => {
//     return (
//         (request.connection && request.connection.encryption ? "https" : "http") +
//         `://${request.headers.host}`
//     )
// }