import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

export default function Article(props) {
  return (
    <article className='myClass'>
    <div>
    <h1>{props.title}</h1>
    <p>{props.description}&nbsp;  
    <a href={props.link}>{props.link}</a></p></div>
    </article>
  )
}


