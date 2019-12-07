'use strict';

const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static('./public'));

const PORT = process.env.PORT;




app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});