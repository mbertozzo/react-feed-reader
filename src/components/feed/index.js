import React from 'react';
import { connect } from "react-redux";

import styles from './style.module.css';
import logo from './../app/folded-newspaper.svg';

class Feed extends React.Component {
  render () {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div>
        <img src={dog || logo} alt="logo" className={styles.imgResponsive} />

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the app icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);