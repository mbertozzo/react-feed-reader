import React from 'react';
import styles from './style.module.css';

const NewsEntry = (props) => {
  const { url, title, author } = props;

  return (
  <a href={url} className={styles.newsLink}>{title}<br /><span>{author}</span></a>
  )
}

export default NewsEntry;