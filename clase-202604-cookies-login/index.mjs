import express from 'express'
import cookieParser from 'cookie-parser'

const PUERTO = 3000

const app = express()

// Avisamos a express que use cookie parser
app.use(cookieParser('clavesecreta'))
// JSON
app.use(express.json())
// URLENCODED
app.use(express.urlencoded({extended:true}))

// Admin
function chequearCookie(req, res, next){
    //  Verifico si la cookie existe
    const sesionId = req.signedCookies['sesionId']
    // Verifico si el valor enviado por el cliente coincide con lo que tenemos en el servidor
    if(sesionId === 'minumerodesesion'){
        return next()
    }
    return res.redirect('/login')
}
app.use('/admin', chequearCookie, express.static('./front-end/front-admin'))

// Login
app.use('/login', express.static('./front-end/front-login'))


// Ruta que va a gestionar el autenticacion y acceso
app.post('/autenticacion', (req, res)=>{
    const {usuario, clave} = req.body
    // Consultar a la BD si el usuario existe
    if(usuario != 'admin' || clave != '123456'){
        return res.redirect('/login')
    }
    /// genero el id
    // lo guardo en algun lado, por ejemplo en la BD
    // consulto el valor
    // Generar cabeceras para las cookies
    //const id = nanoid()
    // id lo guardan en algun lugar -> BD


    res.cookie('sesionId','minumerodesesion',{
        signed: true,
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 1000 * 10
    })
    // res.send('Loguado')
    res.redirect('/admin')
})


app.listen(PUERTO)