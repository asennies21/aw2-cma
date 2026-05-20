import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

// import productos from './productos.mjs'
// controlador.obtenerTodos()
const PUERTO = 3000

const app = express()

/*
/miapp
/
/v1
/app
/miapp/1


/miapp/api/v1/productos
*/

app.use(rutasProductos)



app.listen(PUERTO)
