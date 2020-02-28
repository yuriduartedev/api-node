const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o App
const app = express();
const port = 3001;

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

app.listen(port);