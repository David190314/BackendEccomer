import dotenv from 'dotenv'
import app from './app.js'
dotenv.config()


//Configuracion de puerto 
const PORT = process.env.PORT || 8000



//Configuración de servidor para iniciarlizarlo
app.listen(PORT, ()=>{
    console.log(`Servidor ejecutado en el puerto ${PORT}`)
})
