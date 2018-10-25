import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from './../../redux/actions';

import styles from './style.module.css';

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
  render () {
    const { query, handleUpdateQuery } = this.props;

    return (
      <div>
        <input
          className={styles.inputField}
          name="query"
          type="text"
          placeholder="What are you looking for?"
          onBlur={(e) => {
            e.preventDefault();
            handleUpdateQuery(e.target.value)
          }}
        />
        <p>{query}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);