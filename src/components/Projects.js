import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Boutique.png";
import projImg2 from "../assets/img/Alibabeto.png";
import projImg3 from "../assets/img/Codiscun.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "LA BOUTIQUE",
      description: "Aplicación de escritorio",
      imgUrl: projImg1,
      link: "https://github.com/SoyRonyVargas/Proyecto-Boutique-23BM.git",
    },
    {
      title: "ALIBABETO",
      description: "Aplicación Web",
      imgUrl: projImg2,
      link: "https://alibabeto.netlify.app",
    },
    {
      title: "CODISCUN",
      description: "Sitio Web Administrable",
      imgUrl: projImg3,
      link: "https://codiscun.org",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Cada proyecto en esta sección representa un desafío resuelto, una idea convertida en realidad y un paso adelante en el desarrollo de software. Desde aplicaciones de escritorio hasta plataformas web administrables, he trabajado en diversas soluciones tecnológicas que optimizan procesos y mejoran la experiencia del usuario.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
