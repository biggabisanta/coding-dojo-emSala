const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PokemonSchema = new Schema({
    _id:{type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: {type: String, required: true}, 
    foto:{type: String, required: true},
    nivel:{type: Number}
})
const pokemonModel = mongoose.model("pokemons",PokemonSchema)

module.exports = pokemonModel