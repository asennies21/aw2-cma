// console.log('hola node')
// Vamos a leer un archivo txt
import fsp from 'node:fs/promises'

try{
    const contenido = await fsp.readFile('./texto.txt','utf8')
    // console.log(contenido.toString())
    console.log(contenido)
}catch(e){
    console.log(e)
}