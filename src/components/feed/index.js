import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from './../../redux/actions';

import styles from './style.module.css';

const mapStateToProps = (state) => {
  return {
    query: state.query,
    news: state.news
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
  render () {
    const { query, news, handleUpdateQuery } = this.props;

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
        {/* <p>{query}</p> */}
        {
          (query) ?
            ( news.map((article, i) => (<a href={article.url} key={i} className={styles.newsLink}>{article.title}<br /><span>{article.source.name}</span></a>)) )
            : ( <p></p>)
        }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);