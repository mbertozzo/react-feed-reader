import React from 'react';
import { Link } from 'react-router-dom'
import styles from './style.module.css';

const About = () => (
  <div>
    <p><strong>News Reader</strong> is a web app to search news related to a specific topic.<br />To look for the latest headlines <Link to="/" className={styles.link}>just click here</Link>!</p>
    <p>The project relies on reactjs and react-router to bring together the different parts of the app. Redux helps with the logic and data mangement, redux-saga triggers the API calls to gather live responses for the searched item.</p>
    <p>For any suggestion feel free to open an issue or file a pull request to <a href="https://github.com/mbertozzo/react-redux-news-reader" className={styles.link}>this repository</a>.</p>
    <p className={styles.last}><strong>News Reader</strong> made with &hearts; in Milan by Matteo Bertozzo.</p>
  </div>
)

export default About;