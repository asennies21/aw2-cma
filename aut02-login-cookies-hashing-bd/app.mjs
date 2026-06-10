import express from 'express';
import pool from './conexion.bd.mjs';
import cookieParser from 'cookie-parser';


const PUERTO = 3000;

////////////////
// Instalar -> uid-safe bcryptjs
////////////////
const app = express();
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
////////////////
/// IMPORTANTE -> VER EL ORDEN DE LOS MIDDLEWARES
// Primero, usamos cookieParser para poder leer las cookies
// Luego, usamos express.json() para poder leer el cuerpo de las peticiones POST
// luego, definimos la ruta para el POST de autenticación
// Finalmente, servimos archivos estáticos desde la carpeta 'front'
// y agregamos un middleware para verificar la sesión

app.use(cookieParser());
app.use(express.json());

app.post('/registrar', async (req, res) => {
    // Logica
    // - verificar datos
    // - verificar si usuario ya registrado
    // - hashing -> instalar bcryptjs
    // - redireccionar
});
// Ruta para el POST login
app.post('/autenticacion', async (req, res) => {
    const { usuario, pass } = req.body;
    if (!usuario || !pass) {
        return res.status(400).send('Usuario y contraseña son requeridos');
    }
   // Logica siguiente ...
   // - Verificar usuario en BD
   // - Creacion de cookie y sesion ID -> con uid-safe
});
app.get('/logout', async (req, res) => {
    // Establecemos una cookie de sesión
    res.clearCookie('sessionId');
    res.redirect('/'); // Redirigimos al usuario a la página principal
});
// Form login
app.use('/login', express.static('login'));

// Al final, servimos archivos estáticos desde la carpeta 'front'
// Y agregamos un middleware para verificar la sesión
app.use(express.static('front-admin'));

// Gestion global de errores express
// Ver -> next(error)
app.use((err, req, res, next)=>{
    res.sedStatus(500)
})

