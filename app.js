const express = require('express');

const app = express();

app.listen(3001);

app.set('view engine', 'ejs');

// Middlewares and static files
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
