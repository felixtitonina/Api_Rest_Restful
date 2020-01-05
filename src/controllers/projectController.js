const express = require("express")
const authMiddleware = require('../middlewares/auth')
const router = express.Router();

router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send({
        ok: true,
        user: req.userId // peda o id do usuario do banco
    })
})

module.exports = app => app.use('/projects', router);