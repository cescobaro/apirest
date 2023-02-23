const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cervezaSchema = new Schema({
  Nombre: String, 
  Descripción: String, 
  Graduacion: String,
  Envase: String,
  Precio: String 
})

let Cerveza = mongoose.model('Cerveza', cervezaSchema)

module.exports = Cerveza