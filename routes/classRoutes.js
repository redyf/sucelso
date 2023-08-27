const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe a configuração do banco de dados

// Rota para obter turmas
router.get('/', (req, res) => {
  db.query('SELECT * FROM classes', (err, results) => {
    if (err) {
      console.error('Erro ao obter turmas:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar uma nova turma
router.post('/add', (req, res) => {
  const { className, teacherId } = req.body;
  const query = 'INSERT INTO classes (class_name, teacher_id) VALUES (?, ?)';
  db.query(query, [className, teacherId], (err, results) => {
    if (err) {
      console.error('Erro ao adicionar turma:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.status(201).json({ message: 'Turma adicionada com sucesso' });
    }
  });
});

module.exports = router;
