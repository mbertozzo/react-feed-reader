import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import styles from './style.module.css';
import logo from './folded-newspaper.svg';

import Main from './../main/';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src={logo} alt="Newspaper" />
          <h1 className={styles.title}>Feed Reader</h1>

          <Link className={styles.link} to="/">Your Feed</Link>
          <Link className={styles.link} to="/about">About The Project</Link>
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
