import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollSectionProvider from './context/ScrollContext';

function App() {
  return (
    <ChakraProvider>
      <ScrollSectionProvider basename='/ProjectsPortfolio'>
        <Header/>
        <Home/>
        <Projects/>
        <AboutMe/>
        <Contact/>
        <Footer/>
      </ScrollSectionProvider>
    </ChakraProvider>
  );
}

export default App;
