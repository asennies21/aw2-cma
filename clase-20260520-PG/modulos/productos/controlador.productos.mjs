// CONTROLADOR -> Capa que vincula (por ahora) el MODELO con la respuesta al cliente

import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'
// modelo es un espacio de nombres

export function obtenerTodos(req, res){
    // Controlador se encarga de orquestr
    const datosProductos = modelo.obtenerTodos() // <-- datos completos
    const respuestaVista = vista.obtenerTodos(datosProductos) //<---- arreglo
    // Tener un criterio de datos a enviar
    res.json(respuestaVista)
}

export function obtenerUno(req, res){
    // id_producto -> nomenclatura "snake case"
    // idProducto -> nomenclatura "camel case"
    const idProducto = Number(req.params.id)
    const datosProductos = modelo.obtenerUno(idProducto) //<-- arreglo
    
    // si hay o no productos y responder en consecuencia
    if(datosProductos.datos.length > 0){
        // Tener un criterio de datos a enviar
        res.json(datosProductos)
    }else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
}