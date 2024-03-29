import React from "react";
import { useScrollSection } from "../../context/ScrollContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
} from "@chakra-ui/react";

const Projects = () => {
  const { projects } = useScrollSection();
  AOS.init();

  return (
    <section ref={projects} className="sectionContainer">
      <h2 className="sectionTitle"> Check out some of my projects </h2>

      {/* Astro Landing */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    Astro Landing Page
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                Astro landing page made with NextJS, using Chakra, Formik, Yup
                and EmailJS. It has full responsive design.
                <img
                  className="demo"
                  alt="Lineas Landing Page Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1700530826/DevPortfolio/Astro_Video_vbtoca.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://astrolandingpage.vercel.app/"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      {/* Lineas Landing */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    Company Landing Page
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                Landing page for Lineas Sudamericanas, a land transport company.
                It was made with NextJS, using Chakra, Formik, Yup and EmailJS.
                It has full responsive design.
                <img
                  className="demo"
                  alt="Lineas Landing Page Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1700530825/DevPortfolio/Lineas_Video_qd4u34.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://www.lineassudamericanas.uy/"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      {/* Translator Landing Page */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    Translator Landing Page
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                This is my personal website as Translator. It was made with
                ReactJS, using React Bootstrap, File Server, React Router Dom,
                i18n, React Awesome Slider and EmailJS. It has full responsive
                design.
                <img
                  className="demo"
                  alt="Translator Landing Page Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668611337/DevPortfolio/TranslatorLandingDemo_e7z9lr.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://manuelsanson.github.io/TranslatorLandingPage/"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                  <a
                    className="projectLink"
                    href="https://github.com/ManuelSanson/TranslatorLandingPage"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Repository
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      {/* E-commerce */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    Rugby Clothing E-Commerce
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                Rugby Clothing E-Commerce built with ReactJS, using React
                Bootstrap, Firebase and React Router Dom. It has full responsive
                design.
                <img
                  className="demo"
                  alt="Rugby Clothing E-Commerce Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668613567/DevPortfolio/RugbyE-CommerceDemo_f9b8wn.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://manuelsanson.github.io/ecommerceProject/"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                  <a
                    className="projectLink"
                    href="https://github.com/ManuelSanson/ecommerceProject"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Repository
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      {/* Gym App */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    CTM Rugby Gym App
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                Gym App for players to register their data and gym/related info.
                The project was created using HTML, CSS, SASS and JavaScript. It
                has full responsive design.
                <img
                  className="demo"
                  alt="CTM Rugby Gym App Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668613531/DevPortfolio/CTMGymAppDemo_v54wbu.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://manuelsanson.github.io/GymCTM/"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                  <a
                    className="projectLink"
                    href="https://github.com/ManuelSanson/GymCTM"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Repository
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      {/* CTM Rugby Landing Page */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    CTM Rugby Landing Page
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                Landing page for CTM Rugby. The project was created using HTML,
                CSS and JavaScript. It has full responsive design.
                <img
                  className="demo"
                  alt="CTM Rugby Landing Page Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668613351/DevPortfolio/CTMRugbyLandingDemo_egovy3.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://manuelsanson.github.io/CTMRugby-website/index.html"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                  <a
                    className="projectLink"
                    href="https://github.com/ManuelSanson/CTMRugby-website"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Repository
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>

      {/* web_lab Landing Page */}
      <section className="projectsContainer">
        <article
          className="project"
          data-aos={"fade-up"}
          data-aos-duration={"800"}
        >
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="projectTitle">
                <AccordionButton
                  _expanded={{ bg: "#11242d", color: "#f98125" }}
                >
                  <Box flex="1" textAlign="center" className="boxTitle">
                    web_lab Landing Page
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="projectTextGif">
                Landing page for web_lab. The project was created using HTML,
                CSS, SASS, Bootstrap and AOS. It has full responsive design.
                <img
                  className="demo"
                  alt="web_lab Landing Page Demo"
                  src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668613469/DevPortfolio/web_labLandingDemo_ydrrhy.gif"
                />
                <div className="buttonsContainer">
                  <a
                    className="projectLink"
                    href="https://manuelsanson.github.io/ProyectoFinal-web_lab/index.html"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Deployment
                    </Button>
                  </a>
                  <a
                    className="projectLink"
                    href="https://github.com/ManuelSanson/ProyectoFinal-web_lab"
                    target="blank"
                  >
                    <Button
                      className="projectButton"
                      bgColor={"#f98125"}
                      color={"#11242d"}
                    >
                      Repository
                    </Button>
                  </a>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>
    </section>
  );
};

export default Projects;
