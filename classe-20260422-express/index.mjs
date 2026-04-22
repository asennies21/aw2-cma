import express from 'express'

const PUERTO = 3000



// Instancia servidor express
const app = express()

app.get('/',(req, res)=>{


    res.set('content-type','text/html') //-> Cabecera
    // MIME TYPES
    res
        .status(200) //-> codigo de estado
        .end('<h1>Hola con get</h1>') // -> cuerpo -> contenido
})
app.get('/materias',(req, res)=>{


    res.set('content-type','application/json') //-> Cabecera
    // MIME TYPES
    res
        .status(200) //-> codigo de estado
        .end(`
            {
                "materia1" : "Aw2",
                "materia2" : "Aw2"
            
            }             
            `) // -> cuerpo -> contenido
})
app.get('/saludo',(req, res)=>{
    res.status(304)
    res.end('Hola con get')
})

app.post('/',(req, res)=>{
    res.set('content-type','application/json')
    res.end('{"materia":"AW2"}')
})

// abrir un puerto
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})
