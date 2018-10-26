import React from 'react';

import styles from './style.module.css'
import { API_KEY } from './../../redux/apikey'; 
import { updateSource } from '../../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    source: state.source
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSourceUpdate: (id, name) => {
      dispatch(updateSource(id, name))
    }
  }
}

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
    const { source, handleSourceUpdate } = this.props;

    return (  
      <div>
        <select 
          className={styles.inputField}
          onChange={(e) => {
            e.preventDefault();
            const selectedIndex = e.target.options.selectedIndex;
            const sourceId = e.target.options[selectedIndex].getAttribute('data-ids');
            handleSourceUpdate(sourceId,e.target.value)
          }
        }>
          <option>Choose your news source</option>
          {sources.map((source, i) => (<option key={i} data-ids={source.id}>{source.name}</option>))}
        </select>
        {
          (source.name) ?
            (<h2 className={styles.subtitle}>Headlines from <strong>{source.name}</strong>.</h2>)
            : (<p></p>)
        }
        {
          source.news.map((article, i) => (<a href={article.url} key={i} className={styles.newsLink}>{article.title}<br /><span>{article.author}</span></a>))
        }
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Headlines);