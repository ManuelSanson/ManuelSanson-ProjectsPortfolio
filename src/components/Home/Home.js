import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useScrollSection } from '../../context/ScrollContext';
import './Home.css';


const Home = () => {
    const { home } = useScrollSection();
    
    return (
        <section className='sectionContainer' ref={home}>
            <div className='banner'>
                {/* <h1>Manuel Sanson</h1>
                <h2>Frontend Developer</h2> */}
                <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1669474375/DevPortfolio/Banner_c7b7z5.png' alt='Manuel Sanson, Frontend Developer - Banner'/>
            </div>
            <article className='welcome'>
                <h2>Welcome</h2>
                <p>
                    Hi, thank you for visiting my portfolio. I am Manuel Sanson and I am a Frontend React Developer.
                </p>
                <p>
                    <TypeAnimation
                        sequence={[
                        'Feel free to scroll down to see some of my projects',
                        1200,
                        'Feel free to scroll down to learn more about me',
                        1200,
                        'Feel free to scroll down to get in touch with me',
                        1200,
                        ]}
                        speed={50}
                        wrapper="span" 
                        repeat={Infinity}s
                    />
                </p>
            </article>
        </section>
    )
}

export default Home;