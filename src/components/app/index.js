import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import styles from './style.module.css';
import logo from './folded-newspaper.svg';

import Main from './../main/';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <img className={styles.logo} src={logo} alt="Newspaper" />
          <h1 className={styles.title}>News Reader</h1>

          <Link className={styles.link} to="/">Your News</Link>
          <Link className={styles.link} to="/about">About The Project</Link>
        </div>
        <div className={styles.secondColumn}>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
