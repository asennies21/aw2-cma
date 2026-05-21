// CONTROLADOR -> Capa que vincula (por ahora) el MODELO con la respuesta al cliente

import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'
// modelo es un espacio de nombres

export async function obtenerTodos(req, res){
    // Controlador se encarga de orquestr
    const datosProductos = await modelo.obtenerTodos() // <-- datos completos
    const respuestaVista = vista.obtenerTodos(datosProductos) //<---- arreglo
    // Tener un criterio de datos a enviar
    res.json(respuestaVista)
}

export async function obtenerUno(req, res){
    // id_producto -> nomenclatura "snake case"
    // idProducto -> nomenclatura "camel case"
    const idProducto = Number(req.params.id)
    const datosProductos = await modelo.obtenerUno(idProducto) //<-- arreglo
    const resultado = vista.obtenerUno(datosProductos) //<-- arreglo
    
    // si hay o no productos y responder en consecuencia
    if(resultado.length > 0){
        // Tener un criterio de datos a enviar
        res.json(resultado)
    }else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
}


export async function eliminarUno(req, res){
    // id_producto -> nomenclatura "snake case"
    // idProducto -> nomenclatura "camel case"
    const idProducto = Number(req.params.id)
    const datosProductos = await modelo.eliminarUno(idProducto) //<-- arreglo
    const resultado = vista.eliminarUno(datosProductos) //<-- arreglo
    
    // si hay o no productos y responder en consecuencia
    if(resultado.length > 0){
        // Tener un criterio de datos a enviar
        res.json(resultado)
    }else{
        res.status(404).json({mensaje: `Producto con id ${idProducto} no encontrado`})
    }
}