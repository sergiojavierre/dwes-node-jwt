const { createToken } = require("../security/middleware")

exports.doLogin = (req,res) => {
    const {username, pwd} = req.body
    if(username && (username == 'sergio' && pwd == 123)){
        const user = {
            username,
            pwd
        }
        const token = createToken(user)
        res.status(200).send({
            token
        })
    }
    else res.status(401).send("Invalid email/password")
}