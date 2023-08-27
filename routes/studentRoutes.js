// studentRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe a configuração do banco de dados

// Rota para obter dados de todos os alunos
router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Erro ao obter dados dos alunos:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.json(results);
    }
  });
});

// Rota para adicionar um novo aluno
router.post('/add', (req, res) => {
  const { name, age, classId } = req.body;
  const query = 'INSERT INTO students (name, age, class_id) VALUES (?, ?, ?)';
  db.query(query, [name, age, classId], (err, results) => {
    if (err) {
      console.error('Erro ao adicionar aluno:', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.status(201).json({ message: 'Aluno adicionado com sucesso' });
    }
  });
});

// Resto das rotas relacionadas a alunos
// ...

module.exports = router;
