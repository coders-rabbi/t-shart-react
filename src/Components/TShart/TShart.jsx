import React from 'react';
import './TShart.css'
const TShart = ({ tshart, handlecartToSummary }) => {
    const { price, name, picture, _id } = tshart;
    return (
        <div className='t-shart'>
            <img className='tshart-img' src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            
            <button onClick={() => handlecartToSummary(tshart)} className='add-to-cart'>Add to Cart</button>
        </div>
    );
};

export default TShart;