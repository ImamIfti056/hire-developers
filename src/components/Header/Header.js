import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>Hire Your Favorite Developers</h1>
                <p>Here you will find the best youtubers for 
                    <br />
                    website development, UI/UX design 
                    <br />
                    all around the world.
                    <br />
                    You will be 100% satisfied by their amazing work.
                </p>
            </div>
            <h2><span>Total Budget:</span> $5000</h2>
        </div>
    );
};

export default Header;