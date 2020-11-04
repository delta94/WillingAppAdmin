import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div
      className={`card_dashboard ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.src && (
        <img src={props.src} style={{ width: '80px', height: '20px' }}></img>
      )}
      <p
        style={{
          fontSize: '1.4rem',
          color: 'rgb(24, 23, 24)',
        }}
      >
        {props.children}
      </p>

      <h5
        style={{
          fontSize: '1.2rem',
          color: 'rgb(24, 23, 24)',
        }}
      >
        {props.title ? props.title : 0}
      </h5>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  );
};

export default Card;
