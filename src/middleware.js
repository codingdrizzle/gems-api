const jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticateToken(req, res, next){
    const token = req.headers.authorization
    
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, `${process.env.SECRET}`, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user

        next()
    })
}

module.exports = authenticateToken