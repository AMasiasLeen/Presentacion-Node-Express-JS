const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar la carpeta de archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/partidos', (req, res) => {
  res.render('partidos');
});

app.get('/jugadores', (req, res) => {
  res.render('jugadores');
});

app.get('/estadios', (req, res) => {
  res.render('estadios');
});

app.get('/calendario', (req, res) => {
  res.render('calendario');
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});