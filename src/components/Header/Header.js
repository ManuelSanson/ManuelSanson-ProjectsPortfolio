import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <header className='headerContainer'>
            <NavBar/>
            <div className='headerText'>
                <h1>Manuel Sanson</h1>
                <h2>Frontend Developer</h2>
            </div>
        </header>
    )
}

export default Header;