const express = require('express');

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ?? 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.get('/config', (req, res) => {
  res.json(JSON.parse(process.env.CONFIG_JSON || '{}'))
});

app.listen(port, host, () => console.log(`Server listening at: http://${host}:${port}`));
