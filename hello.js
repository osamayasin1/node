const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js application behind a reverse proxy!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

