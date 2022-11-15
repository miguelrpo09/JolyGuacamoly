import express from 'express'
import { userRouter } from './routes/userRouter.js'
import { clienteRouter } from './routes/clienteRouter.js'
import { productoRouter } from './routes/productoRouter.js'
import { dataBase } from './config/dataBase.js'

// Realizando la instancia para trabajar con express
const app = express()
app.use(express.urlencoded({extended:true}))
// Definiendo el puerto en el cual correra el servidor
const puerto = 3000

try {
  await dataBase.authenticate()
  dataBase.sync()
  console.log('Conexión exitosa a la base de datos')
} catch (error) {
  console.log(error)
}

app.use('/auth', userRouter)
app.use('/client', clienteRouter)
app.use('/product', productoRouter)
app.set('view engine', 'pug')
app.set('views', './views')

// Levantando el servidor en el peurto con la funcion lister de express
app.listen(puerto, ()=>{
  console.log(`Servidor corriendo en el puerto ${puerto}`)
})