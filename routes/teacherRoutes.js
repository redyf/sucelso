const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe a configuração do banco de dados

// Rota para obter docentes
router.get('/', (req, res) => {
  db.query('SELECT * FROM teachers', (err, results) => {
    if (err) {
      console.error('Erro ao obter docentes:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar um novo docente
router.post('/add', (req, res) => {
  const { name, subject } = req.body;
  const query = 'INSERT INTO teachers (name, subject) VALUES (?, ?)';
  db.query(query, [name, subject], (err, results) => {
    if (err) {
      console.error('Erro ao adicionar docente:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.status(201).json({ message: 'Docente adicionado com sucesso' });
    }
  });
});

module.exports = router;
