import React from 'react';
import './TShart.css'
const TShart = ({tshart}) => {
    const {price, name, picture} = tshart;
    return (
        <div className='t-shart'>
           <img className='tshart-img' src={picture} alt="" />
           <h3>{name}</h3>
           <p>Price: ${price}</p>
           <button className='add-to-cart'>Add to Cart</button>
        </div>
    );
};

export default TShart;