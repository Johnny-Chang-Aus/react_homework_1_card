import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Card(props) {
  return (
    <div className="card margin">
      <img src={props.img} alt="card_image" />
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1 className="margin">Gifts for Him</h1>
    <Card img={cardImageGift} title="Gift for Him" subTitle="For Valentine's Day" />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
