const express = require('express');
const app = express();
const port = 3000;

app.get('/sample', (req, res) => {
  res.send('Response')
})

app.listen(port, function () {
  console.log('Sample server listening on port 3000!\n');
});