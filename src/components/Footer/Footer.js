import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import React from 'react';
import { useScrollSection } from '../../context/ScrollContext';
import './Footer.css';

const Footer = () => {
    const { home, scrollToSection } = useScrollSection();

    return (
        <footer className='footerContainer'>
            <div className='footerLogo'>
                <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1668625995/DevPortfolio/FrontendLogo_sz4pfv.png' alt='Manuel Sanson Logo' onClick={()=> scrollToSection(home)} className='projectsLink'/>
            </div>
            <div className='footerContactData'>
                <div className="contactContainer">
                    <PhoneIcon mr={2}/>
                    <h5>(+598)98981698</h5>
                </div>
                <div className="contactContainer">
                    <EmailIcon mr={2}/>
                    <h5>msanson.dev@gmail.com</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;