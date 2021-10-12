
const res = require('express/lib/response')
const jwt = require('jsonwebtoken')
const config = require('./jwt')

exports.createToken = (user) => {
    const payload = {
        username: user.username
    };
    return jwt.sign(payload,config.key,{expiresIn: "7d"})
}

exports.ensureAuth = (req,res,next) => {
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        jwt.verify(token,config.key, (err,decoded) =>{
            if(err){
                return res.status(401).send(err)
            }
            else{
                req.username = decoded.username
                next()
            }
        })
    }   
    else{
        return res.status(403).send('No hay auth')
    } 
    
}