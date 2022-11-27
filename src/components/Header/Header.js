import React from 'react'
import { useScrollSection } from '../../context/ScrollContext';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    const { home, scrollToSection } = useScrollSection();

    return (
        <header className='headerContainer'>
            <NavBar/>
            <div className='headerLogo'>
                <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1669564167/DevPortfolio/MSFrontendLogo_kuoxx6.png' alt='Manuel Sanson Logo' onClick={()=> scrollToSection(home)} className='projectsLink'/>
            </div>
        </header>
    )
}

export default Header;