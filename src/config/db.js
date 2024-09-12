const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gagabi92:JUniknr9cYlRhjxY@cluster0.gq1h8.mongodb.net/');
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

connectDB();

module.exports = mongoose;
