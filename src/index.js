const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const dataRaw = fs.readFileSync(`${__dirname}/../sample.json`, 'utf8');

app.get('/streaming', (req, res) => {
  const { programType } = req.query;
  let data = JSON.parse(dataRaw);
  if (programType) {
    data = data.filter((item) => item.programType === programType);
  }

  res.send(data.slice(0, 21));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
