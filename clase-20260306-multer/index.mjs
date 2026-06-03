import express from 'express'
import multer from 'multer'
// https://www.npmjs.com/package/nanoid
import { nanoid } from 'nanoid'
// https://www.npmjs.com/package/mime-type
import { MimeType } from 'mime-type'

// -----------
const mime = new MimeType()
// path
const PUERTO = 3000

const app = express()

// Ejecutamos multer()
const almacenamiento = multer.diskStorage({
    //---------------------------------------
    // Destino de almacenamiento
    destination: function (req, file, cb) {
        // Chequeos
        cb(null, './archivos')
    },
    //---------------------------------------
    // Gestion del nombre
    filename: function (req, file, cb) {
        // Obtengo la extension desde el mime type
        // const extension = mime.extension(file.mimetype)
        // creo el nombre del archivo con un identificador unico con nanoid()
        const nombreImagen = nanoid() + '.' + mime.extension(file.mimetype)// genera un UID
        cb(null, nombreImagen)
    }
})
// documentacion -> https://github.com/expressjs/multer
const subirArchivo = multer({
   storage: almacenamiento
})


// use por defecto utiliza la ruta raiz /, pero la utiliza como prefijo
app.use('/admin', express.static('./front-admin'))
// Hacemos publica la carpeta archivos
app.use('/archivos', express.static('./archivos'))

// ruta y metodo
app.post('/subir-archivo', (req, res) => {
    
const getionArchivos = subirArchivo.single('imagen') //<-- devuelve una funcion
    // Verificamos el proceso de subida
    getionArchivos(req, res, (error) => {
        // Si hay error respondemos
       console.log(error)
        //if (error) return res.status(500).json({ mensaje: 'Error en el servidor' })
        // Si no hay error
        // req.body <---- app.use(express.json())
        console.log(req.file)
        //---
        res.json({ mensaje: 'ruta subida de archivos del formulario' })
    })

})

app.listen(PUERTO)