// Leer una api
import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    // Hacer una peticion con FETCH -> con promesas
    const respuesta = await fetch('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
    // Extraemos del cuerpo de la peticion los datos
    const productos = await respuesta.json() //<--- Transforma el cuerpo "cadenas de texto" a un objeto/arreglo de JS
    
    // Creamos la ruta
    // const ruta = path.join('.','api.txt')
    // const ruta = path.join('./api.txt')
    const ruta = path.join('./api.json')
    // Guardar los datos en un archivo
    const contenido = JSON.stringify(productos, null, 4) //<--- pasa de JS a forma JSON -> texto
    await fsp.writeFile(ruta, contenido)
    
    // van a leer el contenido del archivo api.json
    // Imprimir por consola
    
    ///console.log(productos)
}catch(e){
    console.log(e)
}