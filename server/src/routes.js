const AuthenticationContoller = require('./controllers/AuthenticationController')
module.exports = (app) => {
  app.post('/register', AuthenticationContoller.register)
}
