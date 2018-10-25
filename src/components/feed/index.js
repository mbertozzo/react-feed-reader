import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from './../../redux/actions';

import styles from './style.module.css';
import { API_KEY } from './apikey';

const mapStateToProps = (state) => {
  return {
    query: state.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateQuery: (query) => {
      dispatch(updateQuery(query))
    }
  }
}

class Feed extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey='+API_KEY)
      .then(response => response.json())
      .then(data => this.setState({ articles: data.articles }));
  }

  render () {
    const { query, handleUpdateQuery } = this.props;
    const { articles } = this.state;

    return (
      <div>
        <input
          className={styles.inputField}
          name="query"
          type="text"
          placeholder="What are you looking for?"
          onChange={(e) => {
            e.preventDefault();
            handleUpdateQuery(e.target.value)
          }}
        />
        <p>{query}</p>
        {articles.map((article, i) => (<a href={article.url} key={i} className={styles.newsLink}>{article.title}<br /><span>{article.source.name}</span></a>))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);