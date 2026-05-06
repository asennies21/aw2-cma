import express from 'express'
import {obtenerProductos,obtenerProductoPorId, eliminarProducto, altaProducto} from './funciones.mjs'

const PUERTO = 3000

const app = express()
app.use(express.json()) //--> avisar a express que voy a mandar datos del tipo JSON por el cuerpo
// Configuracion de una API REST

// GET /api/v1/productos
app.get('/api/v1/productos', obtenerProductos)

// GET /api/v1/productos/:id
app.get('/api/v1/productos/:id', obtenerProductoPorId)

// POST /api/v1/productos -----> damos de alta un registro
app.post('/api/v1/productos', altaProducto)

// PUT /api/v1/productos/:id -----> modificar un registro

// DELETE /api/v1/productos/:id ------> elimnar un registro
app.delete('/api/v1/productos/:id', eliminarProducto)


app.listen(PUERTO)