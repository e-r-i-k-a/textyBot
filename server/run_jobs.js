const schedule = require('node-schedule');
const {formatDate, formatPhoneNumber} = require('../utility.js');
const {PHONE_NUMBER} = require('../secrets.js');
const {sendText} = require('./send_text.js');

const JOBS = [
  {
    to: '+15165102043',
    from: PHONE_NUMBER,
    body: '1 more pre upload test!',
    date: new Date(2019, 08, 21, 21, 38, 0),
  },
]

const run = jobs => {
  jobs.forEach(job => {
    schedule.scheduleJob(job.date, (fireDate) => {
      sendText(job);
      console.log(`node-schedule fired at ${fireDate}`);
    })
    console.log(`we scheudled a text to ${formatPhoneNumber(job.to)} to send at ${formatDate(job.date)}`);
  })
}

run(JOBS);
