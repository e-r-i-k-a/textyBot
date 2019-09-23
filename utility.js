const moment = require('./node_modules/moment/moment.js');

const formatPhoneNumber = str => {
  const isValid = str.length === 12 && str[0] === '+';

  if (!isValid) str;

  return `(${str.slice(2, 5)}) ${str.slice(5, 8)}-${str.slice(8)}`;
};

const formatDate = date => moment(date).format('MM/DD/YYYY hh:mm a');

const getTime = date => moment(date).format('hh:mm a');

const getDate = date => moment(date).format('MM/DD/YYYY');

const getLocalTime = (date, timeZone) => {
  const local = new Date(date)
    .toLocaleString('en-US', {
      timeZone
    });

  return new Date(local);
};

const getUTCtime = date => {
  const utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

  return new Date(utc);
};

module.exports = {
  formatPhoneNumber,
  formatDate,
  getTime,
  getDate,
  getLocalTime,
  getUTCtime,
};
