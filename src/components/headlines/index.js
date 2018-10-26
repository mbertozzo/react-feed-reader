import React from 'react';

import styles from './style.module.css'
import { API_KEY } from './../../redux/apikey'; 

class Headlines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: []
    }
  }
  
  componentDidMount() {
    fetch('https://newsapi.org/v2/sources?apiKey='+API_KEY)
      .then(r => r.json())
      .then(data => this.setState({ sources: data.sources }))
  }

  render() {
    const { sources } = this.state;

    return (  
      <div>
        <p>This is headlines page</p>
        <select className={styles.inputField}>
          {sources.map((source, i) => (<option key={i}>{source.name}</option>))}
        </select>
      </div>
    )
  }
}

export default Headlines;