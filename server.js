import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/posts', posts);

// We can setup route like this or
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

// app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

