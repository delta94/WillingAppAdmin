import React from 'react';
import Card from '../shared/UIElements/Card';

const CategoryItem = (props) => {
  return (
    <Card>
      <span>
        <img src={props.src} style={{ width: '80px', height: '20px' }}></img>
        <strong>{props.children}</strong>
      </span>
      <h7> {props.name}</h7>
    </Card>
  );
};

export default CategoryItem;
