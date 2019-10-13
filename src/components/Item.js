import React from 'react';

const Item = ({name, image}) => (
    <div>
        <p>{name}</p>
        <img src={image} alt={name}/>
    </div>
);

export default Item