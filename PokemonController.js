const {connect} = require('./PokemonRepository')
const pokemonModel = require('./PokemonSchema')
connect()

const getAll = () => {
    return pokemonModel.find((error, pokemon) => {
        return pokemon
    }
    )
}

const getById = (id) => {
    return pokemonModel.findById(id)
}
const add = (pokemon)=>{
    const pokemonNovo = new pokemonModel(pokemon)
    return pokemonNovo.save()
}
const remove = (id) =>{
    return pokemonModel.findByIdAndDelete(id)
}
const update = (id, pokemon) => {
    return pokemonModel.findByIdAndUpdate(id, {
        $set:pokemon
    },
    {new: true})
}
function sobeNivel (datas){
    
}
const treinar = (id, datas) =>{
    const nivel = sobeNivel(datas)
    return pokemonModel.findByIdAndUpdate(id, {
        $set = {
            nivel: nivel
        }},{new: true}
    )
}
module.exports = {
    add,
    getById,
    remove,
    update,
    getAll

}