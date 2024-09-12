const express = require('express');

const autorRoutes = require('./routes/autorRoutes.js');
const livrosRoutes = require('./routes/livrosRoutes.js');

const app = express();


app.use(express.json());

app.use('/autor', autorRoutes);
app.use('/livro', livrosRoutes);

const PORT = process.env.PORT || 5021;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});