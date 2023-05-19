const express = require('express');
const app = express();
const db = require('./src/scripts/globals/config');

app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
