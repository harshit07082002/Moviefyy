const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname, '/public/main.html'));
});

app.listen(3000, () => {
  console.log('listening');
});
