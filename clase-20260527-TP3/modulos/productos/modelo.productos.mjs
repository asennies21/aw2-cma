import pool from '../../bd/conexion.bd.mjs'


export async function obtenerTodos(){
    const resultado = await pool.query('SELECT * FROM productos')
    return resultado.rows // Arreglo de registros
}

export async function crearUno(datos){
    const {producto, precio} = datos //<-- asignacion desestructurante

    const resultado = await pool.query(`
        INSERT INTO productos
            (producto, precios) 
        VALUES
            ($1, $2)
        RETURNING
            id, producto, precio
        `,
        [
            producto,
            precio
        ])
    return resultado.rows
}