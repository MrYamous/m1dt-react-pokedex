import React from 'react';
import { BrowserRouter as Link  } from "react-router-dom";

const Item = ({name, image}) => (
    <div>
        <p><Link to={'/${name}'}/>{name}</p>
        <img src={image} alt={name}/>
    </div>
);

export default Item