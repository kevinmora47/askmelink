import express from 'express';
import { askQuestion } from './ask-question.js';
const app = express();

app.set('view engine', 'ejs');

app.get('/', async function (req, res) {
  res.render('pages/index');
});

app.get('/askMe', async function (req, res) {
  const questionAsked = req.query.question.replace('?', ':');
  const answer = await askQuestion(questionAsked);

  const request = {
    question: questionAsked,
    answer: answer,
  };
  res.render('pages/answer', { request });
});

app.listen(8080);
