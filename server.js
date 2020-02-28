const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
// Permitir que eu envie dados para aplicação no formato JSON
app.use(express.json());
// Permite que outros domínios acessem a sua API.
app.use(cors());

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);
requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);