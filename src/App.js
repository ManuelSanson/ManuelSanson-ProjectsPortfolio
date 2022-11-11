import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import ScrollSectionProvider from './context/ScrollContext';

function App() {
  return (
    <ChakraProvider>
      <ScrollSectionProvider>
        <Header/>
        <Home/>
        <Projects/>
        <AboutMe/>
        <Contact/>
      </ScrollSectionProvider>
    </ChakraProvider>
  );
}

export default App;
