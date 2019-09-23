const express = require('express');
const http = require('http');
const {resolve} = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9001;
const app = express();
const db = require('../db');
const {JOBS, schedule} = require('./schedule_jobs');

app
  .use(express.static(resolve(__dirname, '..', 'client', 'public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/api', require('./api'))

  .get('/*', (req, res, err) => {
    res.status(200).sendFile(resolve(__dirname, '..', 'client', 'public', 'index.html'));
  });

// db.sync({force: true})
db.sync()
  .then(() => console.log('the DB is synced!'))
  .then(() => {
    let server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`listening on port ${server.address().port}!`)
      schedule(JOBS);
    })
});
