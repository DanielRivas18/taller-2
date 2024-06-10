const { findAll, findById, create, update, deleteProduct } = require('../controllers/controll-products')

const routes = require('express').Router()


routes.get('/', findAll)

routes.get('/:id', findById)

routes.post('/', create)

routes.put('/:id', update)

routes.delete('/:id', deleteProduct)


module.exports = routes;