import jwt from 'jsonwebtoken'

// sign -> firmar
// verify -> verificar

const datosPayload = {
    usuario: 'andres',
    rol: 0
}

jwt.sign(datosPayload, 'fresesupersecreta', {expiresIn: '1h'}, (error, token)=>{
    if(error) return console.log(error)
    
        console.log(token)
} )