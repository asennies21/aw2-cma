import express from 'express'
import path from 'node:path'

const PUERTO = 3000

const app = express()

// Middlewares

// Levantamos una web estática
console.log(path.resolve('front'))
app.use(express.static(path.resolve('front')))

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})
