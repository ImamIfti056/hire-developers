import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // counting total
    let total = 0;
    for(const developer of cart){
        total = total + developer.salary;
    }
    return (
        <div className='cart'>
            <h3><b><i class="fas fa-user"></i> Added:</b> {cart.length} </h3>
            <hr />
            <ul className='addedDevelopersList'>
                {
                    cart.map(developer => <li className='addedDeveloper'>
                        <i style={{color: 'teal'}} class="fas fa-check"></i> {developer.owner}
                    </li> )
                }
            </ul>
            <hr />
            <h3><b>Total Salary:</b>${total}</h3>
        </div>
    );
};

export default Cart;