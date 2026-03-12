const express = require("express");
const path = require("path");

const app = express();

// We can setup route like this or
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
  { id: 1, post: "post one" },
  { id: 2, post: "post two" },
  { id: 3, post: "post three" },
  { id: 4, post: "post four" },
]

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(8000, () => console.log("Server running at port 8000"));

