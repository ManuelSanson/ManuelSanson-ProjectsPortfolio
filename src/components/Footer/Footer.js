import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import React from 'react';
import { useScrollSection } from '../../context/ScrollContext';
import './Footer.css';

const Footer = () => {
    const { home, scrollToSection } = useScrollSection();

    return (
        <footer className='footerContainer'>
            <div className='socialMedia'>
                <a href="https://github.com/ManuelSanson" target="_blank" rel="noreferrer">
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub Logo'/>
                </a>
                <a href="https://www.linkedin.com/in/manuel-sanson-trans-dev/?locale=en_US" target="_blank" rel="noreferrer">
                    <img src='https://cdn-icons-png.flaticon.com/512/49/49408.png' alt='LinkedIn Logo'/>
                </a>

            </div>
            <div className='footerLogo'>
                <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1669564167/DevPortfolio/MSFrontendLogo_kuoxx6.png' alt='Manuel Sanson Logo' onClick={()=> scrollToSection(home)} className='projectsLink'/>
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