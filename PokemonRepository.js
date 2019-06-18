const mongoose = require('mongoose')
const MONGO_URL =  'mongodb://localhost:27017/pokemons'
function connect (){
    mongoose.connect(MONGO_URL, {
        useNewUrlParser:true
    },
    (error) => {
        if (error){
            console.error("Equipe Rocket chegou!! =(", error)
        }else {
            console.log("Eu escolho você!! XD")
        }
      })
    }

    module.exports = {connect}