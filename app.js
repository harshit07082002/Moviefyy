const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config({ path: 'config.env' });
app.use(express.static('public'));

app.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname, '/public/main.html'));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening');
});
