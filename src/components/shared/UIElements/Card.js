import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div
      className={`card ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      <h6>{props.title}</h6>
      <h8 style={{ color: ' rgb(204, 95, 231)' }}>{props.subtitle}</h8>
      {props.children}
    </div>
  );
};

export default Card;
