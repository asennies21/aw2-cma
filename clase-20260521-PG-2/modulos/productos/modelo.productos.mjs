// MODELO -> capa conexion a datos
import pool from '../../conexion.bd.mjs'


export async function obtenerTodos() {
    /* Haria una consulta a una BD */
    const resultado = await pool.query(`SELECT * FROM productos`)
    console.log(resultado.rows)
    // Tener un criterio de datos a pasar entre capas
    return resultado.rows
}

export async function obtenerUno(id) {
    const resultado = await pool.query('SELECT * FROM productos WHERE id=$1', [id])
    return resultado.rows
}

export async function eliminarUno(id) {
    const resultado = await pool.query('DELETE FROM productos WHERE id=$1 RETURNING id, producto, precio', [id])
    console.log(resultado)
    return resultado.rows
}