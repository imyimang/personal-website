// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const blogsDir = path.join(__dirname, 'blogs');
if (!fs.existsSync(blogsDir)) {
  fs.mkdirSync(blogsDir);
}

app.post('/api/blogs', (req, res) => {
  const { title, content } = req.body;
  const blogPath = path.join(blogsDir, `${title}.md`);
  fs.writeFileSync(blogPath, content);
  res.status(201).send('Blog saved');
});

app.get('/api/blogs', (req, res) => {
  const files = fs.readdirSync(blogsDir);
  const blogs = files.map((file) => {
    const content = fs.readFileSync(path.join(blogsDir, file), 'utf-8');
    return {
      id: file,
      title: file.replace('.md', ''),
      content,
    };
  });
  res.json(blogs);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
