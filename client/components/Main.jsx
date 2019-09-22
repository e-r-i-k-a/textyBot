import React, {Component} from 'react';
import axios from 'axios';
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
    const url = process.env.DATABASE_URL || 'http://localhost:9001';

    axios.get(`${url}/api`)
    .then(res => res.data)
    .then(textHistory => {
      return this.setState({
        didFetch: true,
        textHistory,
      });
    })
    .catch(err => console.error(err))
  }

  renderHeader() {
    return <header>&#x1F916;  Texty Bot  &#x1F916;</header>
  }

  renderAlert() {
    const {didFetch, textHistory} = this.state;

    if (!didFetch) return <span>Loading...</span>;
    else if (didFetch && textHistory.length === 0) {
      return <p className='text-body'>You haven't sent any texts!</p>
    }
  }

  renderTexts() {
    const {textHistory} = this.state;

    const texts = textHistory.map(({id, to, body, createdDate}) => {
      return <article key={id} className='text'>

        <span className='text-meta'>
          <span className='text-to'>
            <p>&#x1F4F1;  {formatPhoneNumber(to)}</p>
          </span>
          <span className='text-date'>
            <p>{getDate(createdDate)}  &#x1F4C6;</p>
            <p>{getTime(createdDate)}  &#x231A;</p>
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
