# 🌟 API con Express.js

Ejemplo de creación de API con Express.js

## 🔵 Creación de un proyecto nuevo

1. Crea un nuevo proyecto de js llamado `express_api`, y agrega express como dependencia.
2. Crea un archivo llamado `app.js` y agrega una app de express:
```js
// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

## 🔵 GET: Crea un endpoint que regrese una lista de explorers

1. Utiliza el método GET de express para este endpoint.
2. Crea algunos objetos y regresa la lista como se indica.
3. Agrega el código `HTTP CODE 200` en el request:
```js
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
```
4. Levanta el server con `node app.js`.
![Método GET](https://github.com/DanielaBeltranCruz/API-with-Express.js/blob/master/images/GET-1.PNG)

## 🔵 GET: Crea un endpoint que te regrese un explorer mediando un ID

1. Agrega el siguiente código:
```js
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Daniela"}
    res.status(200).json(explorer)
})
```
2. Recuerda parar y volver a levantar el server para ver los cambios recientes.
![Método GET](https://github.com/DanielaBeltranCruz/API-with-Express.js/blob/master/images/GET-2.PNG)

## 🔵 POST: Crea un endpoint que se encargue de crear un explorer

1. Agrega el siguiente código:
```js
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    console.log(req.body) // Parámetros de un cliente
    res.status(201).json({message: "Created"})
})
```
2. Recuerda parar y volver a levantar el server para ver los cambios recientes.
![Método POST](https://github.com/DanielaBeltranCruz/API-with-Express.js/blob/master/images/POST.PNG)

## 🔵 PUT: Crea un endpoint que se encargue de actualizar un explorer

1. Agrega el siguiente código:
```js
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un  cliente
    res.status(200).json({message: "Updated!"})
})
```
2. Recuerda parar y volver a levantar el server para ver los cambios recientes.
![Método PUT](https://github.com/DanielaBeltranCruz/API-with-Express.js/blob/master/images/PUT.PNG)

## 🔵 DELETE: Crea un endpoint para eliminar un explorer

1. Agrega el siguiente código:
```js
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request $new Date()`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parámetros de un  cliente
    res.status(200).json({message: "Deleted"})
})
```
2. Recuerda parar y volver a levantar el server para ver los cambios recientes.
![Método DELETE](https://github.com/DanielaBeltranCruz/API-with-Express.js/blob/master/images/DELETE.PNG)
