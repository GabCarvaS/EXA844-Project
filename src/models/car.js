const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  mes: {
    type: String,
    required: true,
    trim: true,
  },
  cars: [
    {
      marca: {
        type: String,
        required: true,
      },
      modelo: {
        type: String,
        required: true,
      },
      posicao: {
        type: Number,
        required: true,
      },
      qtdVendas: {
        type: Number,
        required: true,
      },
      qtdocorrencias: {
        type: Number,
        required: true,
      },
    },
  ],
});
module.exports = mongoose.model("Car", schema);
