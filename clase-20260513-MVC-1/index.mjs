import express from 'express'
import * as controlador from './modulos/productos/controlador.productos.mjs'
// import productos from './productos.mjs'
// controlador.obtenerTodos()
const PUERTO = 3000

const app = express()

app.get('/api/v1/productos', controlador.obtenerTodos)
app.get('/api/v1/productos/:id', controlador.obtenerUno)


app.listen(PUERTO)
