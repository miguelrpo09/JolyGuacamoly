import express from 'express'
import { formularioCliente, crearCliente } from '../controllers/clienteControllers.js'


const clienteRouter = express.Router()

clienteRouter.get('/cliente', formularioCliente)
clienteRouter.post('/cliente', crearCliente)

export default clienteRouter
