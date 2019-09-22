const {ACCT, AUTH} = require('../secrets.js');
const twilio = require('twilio')(ACCT, AUTH);
const axios = require('axios');
const {formatPhoneNumber, formatDate} = require('../utility.js');

const sendText = ({to, from, body, date}) => {
  const jobDate = formatDate(date);

  //first send the text
  twilio.messages
  .create({to, from, body})
  .then(({dateCreated, to, body}) => {
    console.log('we sent this text: ', {
      dateSent: formatDate(dateCreated),
      recipient: formatPhoneNumber(to),
      body,
      jobDate,
    })

    //then update the API
    const root = process.env.DATABASE_URL || 'http://localhost:9001';
    const url = `${root}/api`;
    return axios.post(url, {
      jobDate: date,
      dateCreated,
      to,
      body
    })
  })
  .then(({data: {dateCreated, to, body, jobDate}}) => {
    console.log('we created this db record: ', {
      dateCreated,
      to,
      body,
      jobDate,
    })
  })
  .catch(err => console.error(err))
}

module.exports = {
  sendText
}
