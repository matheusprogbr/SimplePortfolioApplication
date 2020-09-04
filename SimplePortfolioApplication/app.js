const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

const videos = require('./data.js');
const data = require('./about_data.js');

app.use(express.static('public'));

app.set('view engine','njk');

nunjucks.configure('views', {
  express:app,
  autoescape: false,
  noCache:true
});

app.get('/',(req,res) => {
  return res.render('about', {item:data});
});

app.get('/portfolio', (req,res) => {
  return res.render('portfolio', {items:videos, about:data});
});

app.get('/video', (req,res) => {
  const id = req.query.id;

  const video = videos.find(function(video){
    if(video.id === id){
      return true;
    }
  });
  
  if(!video){
    return res.send('Video not found!');
  }

  return res.render('video', {item:video});

  res.send(id);
})

app.listen(5000, () => {
  console.log('Server is running!');
});