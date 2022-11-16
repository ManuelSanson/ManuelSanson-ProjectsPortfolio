import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Link } from '@chakra-ui/react';
import React from 'react'
import { useScrollSection } from '../../context/ScrollContext';
import './AboutMe.css';

const AboutMe = () => {
    const { aboutMe, projects, scrollToSection } = useScrollSection();

    return (
        <section ref={aboutMe} className='sectionContainer'>
            <h2 className='sectionTitle'> A little about me </h2>
            <article className='aboutMeSection'>
                <p className='sectionParagraph'> I am relatively new to this world. I started by learning Python, and I found coding quite fun and challenging. Since then, I decided to start learning Web Development and enrolled in Coderhouse to take their one-year Full Stack Development career. The Full Stack career is composed of four blocks: Web Development, JavaScript, ReactJS and Backend Development. I have already completed the Frontend courses and I am currently taking the last one, Backend Development. In these courses I have acquired knowledge of ReactJS, JavaScript, HTML, CSS, SASS, Bootstrap, Git, Github and Firebase, among others. </p>
                <p className='sectionParagraph'> On a different note, I have a background in Translation, since I received a Bachelor’s Degree in Public Translation from the Universidad of Montevideo and I work as Translator since 2017. This has enabled me to develop certain skills that I deem key for coding, such as English proficiency, attention to detail, creativity, organization skills, capacity to work in teams, among others. </p>
                <p className='sectionParagraph'> As you can see on my <Link onClick={()=> scrollToSection(projects)} className='projectsLink'> PROJECTS </Link> section above, , I have several projects that validate my skills acquired so far. And I am really eager to continue developing such skills. I would say my main area of expertise is landing pages, but I am excited for taking up any new projects. </p>
                <p className='sectionParagraph'> If you want to learn more about me, please feel free to download my resume by clicking the following button. </p>
                <div className='buttonsContainer'>
                    <Button className='downloadResumeButton' colorScheme='burlywood'>
                        <DownloadIcon mr={2}/> Download resume
                    </Button>
                </div>
            </article>
        </section>
    )
}

export default AboutMe;