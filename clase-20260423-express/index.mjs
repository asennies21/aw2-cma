import express from 'express'

const PUERTO = 3000

const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 20000
    },
    {
        id:2,
        nombre: "Pantalon",
        precio: 30000
    }
]

// Instancia servidor express
const app = express()

// Avisar a express que verifique si hay datos del cliente en formato .json
app.use(express.json())

const peticionGetEnRaiz = (req, res) => {
    res.status(200)
    res.end('Hola con get')
}

// peticionGetEnRaiz()


app.get('/', peticionGetEnRaiz)

app.get('/productos', (req, res) => {

    res.json(productos)

    // res.end(JSON.stringify(productos))
    // res.set('content-type','application/json')
    // res.end('[{"nombre":"Camiseta", "precio":20000}]')

})
app.get('/productos/:id', (req, res) => {

    const id = parseInt(req.params.id)
    console.log(id)
    // Filtrar
    const arregloFiltrado = productos.filter((producto)=>{
        return producto.id === id
    })

    res.json(arregloFiltrado)

})
app.post('/productos', (req, res) => {
    // Agrega al objeto req o peticion una propiedad llamada "body"
    // console.log(req.body)

    const producto = req.body
    productos.push(producto)
    res.status(201).json({mensaje:'Producto creado'})
})


// abrir un puerto
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})


// ---------------------------

// const x = ()=>{
//     console.log('hola')
// }

// const z = (_x)=>{
//     console.log('ejecucion 1')
//     const y = 'saludo'
//     _x(y)
//     console.log('ejecucion 2')
// }

// z(x)