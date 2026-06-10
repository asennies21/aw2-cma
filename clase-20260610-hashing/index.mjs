import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs';

const PUERTO = 3000;

////////////////

////////////////
const app = express();
app.use(express.json()) //<---- formato JSON -> convierte en Objeto dentro de body
app.use(express.urlencoded({ extended: true })) //<---- formato urlencoded -> convierte en un objeto dentro de body

// exponemos los 2 fronts

// Admin CRUD
app.use('/admin', express.static('./fronts/front-admin'))

// Login
app.use('/login', express.static('./fronts/front-login'))

// Autenticar
app.post('/autenticar', (req, res)=>{
    // Actividad 5 
    // Generar el id con nanoid
})

// Registrar
app.post('/registrar', async (req, res) => {
    // 1 - Capturamos los datos
    //req.body //<-- tanto json y urlencoded se guardan aqui
    console.log(req.body)
    const { usuario, pass } = req.body

    // 2 - Control
    if (!usuario || !pass) {
        return res.status(400).json({
            mensaje: 'Datos incompletos'
        })
    }

    // 3 - Encriptamos clave
    // try{
    const salt = await bcrypt.genSalt(10); //<--- previene el ataque arcoiris de fuerza bruta
    const hash = await bcrypt.hash(pass, salt);
    console.log(hash)
    //}catch(error){

    //}

    // 4 - Guardamos en BD
    // usar try/catch
    const resultado = await pool.query(`
        INSERT INTO usuarios
            (username, password_hash)
        VALUES
            ($1, $2)
        RETURNING
            id, username
        `, //<---- ojo con la coma
        [
            usuario,
            hash
        ]
    )
    console.log(resultado)
    // 5 - Verificamos si se realizó la insercion
    if (resultado.rowCount > 0) {
        return res.json({
            mensaje: `El usuario ${usuario} se ha registrdo con éxito`
        })
    }
    res.status(500).json({
        mensaje: 'El registro no se pudo realizar'
    })


})


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});