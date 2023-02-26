const controllerProducts = require('../products/controller.products')
const controllerCarts = require('../carts/controller.carts')
const controllerUsers = require("../users/controller.users")
const controllerviewTemplates = require('../viewTemplates/controller.viewTemplates')
const controllerAuth = require('../auth/controller.auth')

const router = (app) => {
  
  app.use('/',controllerviewTemplates)
  app.use('/auth',controllerAuth)
  app.use('/users',controllerUsers)
  app.use('/products',controllerProducts)
  app.use('/carts',controllerCarts)
}

module.exports = router