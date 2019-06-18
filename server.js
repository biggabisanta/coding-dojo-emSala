const express = require('express')
const controller = require('./PokemonController')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const PORT = 3000

servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/pokemons', (request, response) => {
  controller.getAll()
  .then(pokemons =>{
    response.send(pokemons)
  }) 
})

servidor.get('/pokemons/:pokemonId', (request, response) => {
  const id = request.params.pokemonId
  controller.getById(id)
  .then (pokemon => {
    if (!pokemon){
      response.sendStatus(404)
    }else {response.send(pokemon)}
  })
})
servidor.post('/pokemons', (request, response) => {
  controller.add(request.body)
.then(pokemon =>{ 
  const _id = pokemon._id
  response.send(_id)
})
})

servidor.delete('/pokemons/:pokemonId', (request, response) => {
  controller.remove(request.params.pokemonId)
  .then(pokemon => {
    if(pokemon === null || pokemon === undefined){
      response.sendStatus(404)
    } else {
      response.sendStatus(204)
    }
  })
})

servidor.patch('/pokemons/treinar/:pokemonId',(request, response) => {
  controller.treinar(request.params.pokemonId, request.body)
  .then(pokemon =>{
    if(!pokemon){
      response.sendStatus(404)
    }else{
      response.send(pokemon)
    }
  })
})
servidor.patch("/pokemons/:pokemonId",(request,response)=>{
  controller.update(request.params.pokemonId, request.body)
  .then(pokemon => {
    if(!pokemon) {
      response.sendStatus(404)
    }else {
      response.send(pokemon)
    }
  })
})
servidor.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
