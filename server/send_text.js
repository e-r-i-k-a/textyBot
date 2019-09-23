const axios = require('axios');
const event = require('events');
const emitter = new event.EventEmitter();
const {ACCT, AUTH} = require('../secrets.js');
const twilio = require('twilio')(ACCT, AUTH);
const connection = process.env.INSTANCE_CONNECTION_NAME;
const host = connection ? `/cloudsql/${connection}` : 'http://localhost:9001';
const {formatPhoneNumber, formatDate} = require('../utility.js');

emitter.on('textSent', (date, dateCreated, to, body) => {
  const url = `${host}/api`;
  return axios.post(url, {
    jobDate: date,
    dateCreated,
    to,
    body
  })
  .then(({data: {dateCreated, to, body, jobDate}}) => {
    console.log('we created this db record: ', {
      dateCreated,
      to,
      body,
      jobDate,
    })
  })
})

const sendText = ({to, from, body, date, mediaUrl}) => {
  const jobDate = formatDate(date);

  twilio.messages
  .create({to, from, body, mediaUrl})
  .then(({dateCreated, to, body}) => {
    console.log('we sent this text: ', {
      dateSent: formatDate(dateCreated),
      recipient: formatPhoneNumber(to),
      body,
      jobDate,
    })
    emitter.emit('textSent', date, dateCreated, to, body)
  })
  .catch(err => console.error(err))
}

module.exports = {
  sendText
}
