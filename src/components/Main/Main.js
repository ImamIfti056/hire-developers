import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Main.css';

const Main = () => {

    // states
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    // loading data from database
    useEffect(() => {
        fetch('./mydb.JSON')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    },[])

    // Hire button handling
    const handleAddButton = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        // website body
        <div className='main'>
            <div className="developers">
                {
                    developers.map(developer => <Developer
                    key={developer.key}
                    developer={developer}
                    handleAddButton={handleAddButton}
                    ></Developer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;