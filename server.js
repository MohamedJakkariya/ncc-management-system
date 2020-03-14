const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Response sended');
});

app.listen(4000, () => {
  console.log('Server running on port #4000');
});
