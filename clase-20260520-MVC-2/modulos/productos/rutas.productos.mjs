// import express from 'express'
import {Router} from 'express'
import * as controlador from './controlador.productos.mjs'

// Instanciamos Router -> es como una rama de express
// const rutasProductos = new express.Router()
const rutasProductos = new Router()
// const rutaBaseV1 = '/app/v1'
rutasProductos.get('/api/v1/productos', controlador.obtenerTodos)
rutasProductos.get('/api/v1/productos/:id', controlador.obtenerUno)

export default rutasProductos