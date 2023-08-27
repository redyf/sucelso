const express = require('express')
const db = require('./db');
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Importe e use as rotas de alunos
const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

// Importe e use as rotas de notas
const gradeRoutes = require('./routes/gradeRoutes');
app.use('/grades', gradeRoutes);

// Importe e use as rotas de vídeos
const videoRoutes = require('./routes/videoRoutes');
app.use('/videos', videoRoutes);

// Importe e use as rotas de turmas
const classRoutes = require('./routes/classRoutes');
app.use('/classes', classRoutes);

// Importe e use as rotas de docentes
const teacherRoutes = require('./routes/teacherRoutes');
app.use('/teachers', teacherRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao sistema escolar!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
