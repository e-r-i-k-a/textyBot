# TEXTYBOT
*send texts via node server to phone numbers, with a front-end ledger of texts*

[1] install postgres, node, npm<br/>
[2] create a postgres database entitled `textybot`<br/>
[3] clone or fork repo onto your local machine<br/>
[4] cd into project directory, `npm i`<br/>
[5] `touch secrets.js` with the following code (values from your Twilio account):<br/>
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
[6] `cd server/schedule_jobs.js` and hardcode texts to be sent within `const JOBS`<br/>
* to: 12 digit string prefixed with `+1` (e.g.: `+12125550000`)
* body: string that will become the body of the text message
* mediaUrl (optional): url string in an array (e.g.: [‘https://media.giphy.com/...’])<br/>
[7] `npm start`<br/>
[8] scheduled jobs will log in console<br/>
[9] completed jobs will log to frontend at `localhost:9001`<br/>
