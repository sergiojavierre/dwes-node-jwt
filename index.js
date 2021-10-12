const 
    express = require('express'),
    app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const authController = require('./controllers/authController')
const middleware = require('./security/middleware')

app.post('/login', authController.doLogin)
app.get('/auth', middleware.ensureAuth, (req,res) => {
    res.status(200).send(`Tu username es ${req.username}`)
})

app.listen(8080, () => {
    console.log('server listening')
})