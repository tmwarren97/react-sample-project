const express = require('express');
const app = express();
const port = 3000;

app.post('/userInfo', (req, res) => {
  // res.json({ success: 'Successfully submitted.' });
  res.status(404).json({ error: 'Failed to'});
  res.end();
})

app.listen(port, function () {
  console.log('Sample server listening on port 3000!\n');
});