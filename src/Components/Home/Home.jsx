import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShart/TShart';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tsharts = useLoaderData();
    console.log(tsharts);
    return (
        <div className='home-container'>
            <div className='t-shart-container'>
                {
                    tsharts.map(tshart => <TShart
                        key={tshart._id}
                        tshart={tshart}
                    ></TShart>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;