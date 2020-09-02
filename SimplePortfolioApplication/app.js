const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

app.use(express.static('public'));

app.set('view engine','html');

nunjucks.configure('views', {
  express:app
});

app.get('/',(req,res) => {
  return res.render('index');
});

app.get('/portfolio', (req,res) => {
  res.render('portfolio');
});

app.listen(5000, () => {
  console.log('Server is running!');
});