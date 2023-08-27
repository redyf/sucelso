const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe a configuração do banco de dados

// Rota para obter notas
router.get('/', (req, res) => {
  db.query('SELECT * FROM grades', (err, results) => {
    if (err) {
      console.error('Erro ao obter notas:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar uma nova nota
router.post('/add', (req, res) => {
  const { studentId, subject, score } = req.body;
  const query = 'INSERT INTO grades (student_id, subject, score) VALUES (?, ?, ?)';
  db.query(query, [studentId, subject, score], (err, results) => {
    if (err) {
      console.error('Erro ao adicionar nota:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.status(201).json({ message: 'Nota adicionada com sucesso' });
    }
  });
});

module.exports = router;
