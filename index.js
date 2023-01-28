import express from 'express';
import { response } from '../askmelink/ask-question';
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', async function (req, res) {
  res.render('pages/index');
  console.log(response());
});

// about page
app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');
