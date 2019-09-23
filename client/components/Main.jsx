import React, {Component} from 'react';
import axios from 'axios';
const connection = process.env.INSTANCE_CONNECTION_NAME;
const host = connection ? `/cloudsql/${connection}` : 'http://localhost:9001';
const {getDate, getTime, formatPhoneNumber} = require('../../utility');

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didFetch: false,
      textHistory: [],
    }
  };

  componentDidMount() {
    axios.get(`${host}/api`)
    .then(res => res.data)
    .then(textHistory => {
      return this.setState({
        didFetch: true,
        textHistory: textHistory.reverse(),
      });
    })
    .catch(err => console.error(err))
  }

  renderHeader() {
    return <header>&#x1F916;  Texty Bot  &#x1F916;</header>
  }

  renderAlert() {
    const {didFetch, textHistory} = this.state;

    if (!didFetch) return <p className='text-body'>Loading...</p>;
    else if (didFetch && textHistory.length === 0) {
      return <p className='text-body'>You haven't sent any texts!</p>
    }
  }

  renderTexts() {
    const {textHistory} = this.state;

    const texts = textHistory.map(({id, to, body, jobDate}) => {
      return <article key={id} className='text'>

        <span className='text-meta'>
          <span className='text-to'>
            <p>&#x1F4F1; {formatPhoneNumber(to)}</p>
          </span>
          <span className='text-date'>
            <p>{getDate(jobDate)}  &#x1F4C6;</p>
            <p>{getTime(jobDate)}  &#x231A;</p>
          </span>
        </span>

        <span className='text-body'>
          <p>&#x1F4AC; {body}</p>
        </span>

      </article>
    })

    return <section>{texts}</section>;

  }

  render() {
    return (
      <main>
        {this.renderHeader()}
        {this.renderAlert()}
        {this.renderTexts()}
      </main>
    )
  }
}
