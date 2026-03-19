import express from 'express';
import logger from './middleware/logger.js';
import posts from './routes/posts.js';
import path from 'path';
import { fileURLToPath } from 'url';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use('/api/posts', posts);
// We can setup route like this or
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// })

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
//
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
