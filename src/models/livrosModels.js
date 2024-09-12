const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  author:{ type: String, required: true },
  year:{ type: Number, required: true },
  genre:{ type: String, required: true }
});

const Livro = mongoose.model('Livro', LivroSchema);
module.exports = Livro;