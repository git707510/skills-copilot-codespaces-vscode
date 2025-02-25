// Create web server
// Listen on port 3000
// Respond to GET requests to /comments with a list of comments
// Respond to POST requests to /comments with a new comment
// Respond to PUT requests to /comments/:id with an updated comment
// Respond to DELETE requests to /comments/:id with a deleted comment

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let comments = [
  'This is a comment',
  'This is another comment'
];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body.comment;
  comments[id] = comment;
  res.json(comment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments[id];
  comments.splice(id, 1);
  res.json(comment);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});