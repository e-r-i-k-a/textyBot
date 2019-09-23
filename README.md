# TEXTYBOT
*send texts via node server to phone numbers, with a front-end ledger of texts*

[1] install postgres, node, npm
[2] create a postgres database entitled `textybot`
[3] clone or fork repo onto your local machine
[4] cd into project directory, `npm i`
[5] `touch secrets.js` with the following code (values from your Twilio account):
```
const ACCT = 'XXX';
const AUTH = 'YYY';
const PHONE_NUMBER = '+1AAABBBCCCC';

module.exports = {
	ACCT,
	AUTH,
	PHONE_NUMBER,
};
```
[6] `cd server/schedule_jobs.js` and hardcode texts to be sent within `const JOBS`
* to: 12 digit string prefixed with `+1` (e.g.: `+12125550000`)
* body: string that will become the body of the text message
* mediaUrl (optional): url string in an array (e.g.: [‘https://media.giphy.com/...’])
[7] `npm start`
[8] scheduled jobs will log in console
[9] completed jobs will log to frontend at `localhost:9001`  
