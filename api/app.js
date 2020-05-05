const express = require('express');
const data = require("./mock-data.json");

const port = 8000;
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', function(req, res, next) {
    res.json(data);
  });
 
console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
