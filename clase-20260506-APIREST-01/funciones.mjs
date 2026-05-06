import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProductoPorId(req, res) {

    // Logica extra 
    const id_producto = Number(req.params.id) //-> verificar si es un numero -> Cast -> NaN
    // const id_producto = parseInt(req.params.id) //-> 125abc -> 125 
    // Filtramos
    const productosFiltrados = productos.filter((producto) => {
        return id_producto === Number(producto.id) //-> verdadero o false
    })

    // Logica verificar si hay productos
    if (productosFiltrados.length > 0) {

        res.json(productosFiltrados)
    } else {
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }
}

export function altaProducto(req, res) {

    // 
    const nuevoProducto = req.body //---> cuerpo -> siempre verificar la estructura que viene del cliente
    productos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)

}

export function eliminarProducto(req, res) {

    // Logica extra 
    const id_producto = Number(req.params.id) //-> verificar si es un numero -> Cast -> NaN
    // const id_producto = parseInt(req.params.id) //-> 125abc -> 125 
    // Filtramos


    const productosFiltrados = productos.filter((producto) => {
        return id_producto !== Number(producto.id) //-> verdadero o false
    })

    // productos = productosFiltrados

    productos.length = 0 // ---> ponemos en 0
    productos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminado'
    }
    res.json(respuesta)

}