const api = require('express').Router();
const db = require('../db/models');
const {Job} = db;

//GET:
api.get('/', (req, res, next) => {
  Job.findAll({indclude: [{all: true}]
  })
  .then(allJobs => {
    res.status(200).json(allJobs)
  })
  .catch(next)
})

//POST
api.post('/', (req, res, next) => {
  Job.create(req.body)
  .then(createdJob => {
    res.status(200).json(createdJob)
  })
  .catch(next)
})

module.exports = api;
