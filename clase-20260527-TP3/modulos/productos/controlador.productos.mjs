import * as modelo from './modelo.productos.mjs'

export async function obtenerTodos(req, res){
    // Arreglo
    const productos = await modelo.obtenerTodos()
    if(productos.length === 0){
        return res.status(404).json({mensaje:'Registros no encontrados'})
    }
    // Respuesta al cliente
    res.json(productos)
}

export async function crearUno(req, res){
    const datosproductos = req.body
    /// <---------------------------------------------------
    // Futuro esto va en la capa servicios <---- logica de negoscios
    // Verificar datos que ingrresar del cliente:
    // - Si es un numro-cadena-... / si no esta vacio / ets
    const productos = await modelo.crearUno(datosproductos) 

      if(productos.length === 0){
        return res.status(400).json({mensaje:'No se pudo dar de alta el registro'})
    }
    // Respuesta al cliente
    res.json({mensaje: 'Producto dado de alta', producto: productos})
}
