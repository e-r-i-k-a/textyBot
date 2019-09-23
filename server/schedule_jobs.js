// const moment = require('moment');
const sched = require('node-schedule');
const {formatDate, formatPhoneNumber, getLocalTime, getUTCtime} = require('../utility.js');
const {PHONE_NUMBER} = require('../secrets.js');
const {sendText} = require('./send_text.js');

const date = new Date(2019, 08, 23, 11, 0, 0);

const JOBS = [
  {
    to: '+12038480105',
    from: PHONE_NUMBER,
    body: 'hello world',
    date,
    // date: getUTCtime(date),
    mediaUrl: ['https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif'],
  },
]

const schedule = jobs => {
  jobs.forEach(job => {
    sched.scheduleJob(job.date, (fireDate) => {
      console.log(`node-schedule fired at ${fireDate}`);
      sendText(job);
    })
    console.log(`we scheudled a text to ${formatPhoneNumber(job.to)} to send at ${formatDate(job.date)}`);
  })
}

module.exports = {
  JOBS,
  schedule,
}
