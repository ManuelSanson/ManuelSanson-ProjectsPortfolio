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
                <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1668625995/DevPortfolio/FrontendLogo_sz4pfv.png' alt='Manuel Sanson Logo' onClick={()=> scrollToSection(home)} className='projectsLink'/>
            </div>
        </header>
    )
}

export default Header;