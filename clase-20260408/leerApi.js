// Leer una api

try{
    // Hacer una peticion con FETCH -> con promesas
    const respuesta = await fetch('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
    // Extraemos del cuerpo de la peticion los datos
    const productos = await respuesta.json() //<--- Transforma el cuerpo "cadenas de texto" a un objeto/arreglo de JS
    console.log(productos)
}catch(e){
    console.log(e)
}