import { createContext, useContext } from "react";
import { useRef } from 'react';


export const ScrollSection = createContext();
export const useScrollSection = () => useContext(ScrollSection);

const ScrollSectionProvider = ({children}) => {
    const home = useRef(null);
    const projects = useRef(null);
    const aboutMe = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior:  'smooth'
        })
    }

    return (
        <ScrollSection.Provider value={{ home, projects, aboutMe, contact, scrollToSection }}>
            { children }
        </ScrollSection.Provider>
    )
}

export default ScrollSectionProvider;