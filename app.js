// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP Methods GET
// Endpoint que regresa una lista
// localhost:3000/v1/explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Daniela1"}
    const explorer2 = {id: 2, name: "Daniela2"}
    const explorer3 = {id: 3, name: "Daniela3"}
    const explorer4 = {id: 4, name: "Daniela4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    // HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

// Endpoint que regresa un explorer mediante un ID
// localhost:3000/v1/explorers/1
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Daniela"}
    res.status(200).json(explorer)
})

// HTTP Methods POST
// Endpoint que se encargue de crear un explorer
// localhost:3000/v1/explorers
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    console.log(req.body) // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

// HTTP Methods PUT
// Endpoint que se encargue de actualizar un explorer
// localhost:3000/v1/explorers/1
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un  cliente
    res.status(200).json({message: "Updated!"})
})

// HTTP Methods DELETE
// Endpoint para eliminar un explorer
// localhost:3000/v1/explorers/1
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request $new Date()`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un  cliente
    res.status(200).json({message: "Deleted"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
