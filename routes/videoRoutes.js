const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe a configuração do banco de dados

// Rota para obter vídeos
router.get('/', (req, res) => {
  db.query('SELECT * FROM videos', (err, results) => {
    if (err) {
      console.error('Erro ao obter vídeos:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar um novo vídeo
router.post('/add', (req, res) => {
  const { title, url } = req.body;
  const query = 'INSERT INTO videos (title, url) VALUES (?, ?)';
  db.query(query, [title, url], (err, results) => {
    if (err) {
      console.error('Erro ao adicionar vídeo:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.status(201).json({ message: 'Vídeo adicionado com sucesso' });
    }
  });
});

module.exports = router;
