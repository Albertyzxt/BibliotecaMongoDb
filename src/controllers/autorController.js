const Autor = require('../models/autorModels.js');

exports.createAutor = async (req, res) => {
  try {
    const autor = await Autor.create(req.body);
    res.status(201).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar autor' });
  }
};

exports.getAutores = async (req, res) => {
  try {
    const autores = await Autor.find().populate('id_pet');
    res.status(200).json(autores);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar autores' });
  }
};

exports.getAutorById = async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id).populate('id_pet');
    res.status(200).json(autor);
  } catch (error) {
    res.status(404).json({ error: 'Autor não encontrado' });
  }
};

exports.updateAutor = async (req, res) => {
  try {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(autor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar autor' });
  }
};

exports.deleteAutor = async (req, res) => {
  try {
    await Autor.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar autor' });
  }
};