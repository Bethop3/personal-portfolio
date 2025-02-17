import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

// Importando imágenes de habilidades
import htmlLogo from "../assets/img/HTML-5.png";
import cssLogo from "../assets/img/css-3.svg";
import jsLogo from "../assets/img/JavaScript-logo.png";
import reactLogo from "../assets/img/React.svg.png";
import nodeLogo from "../assets/img/node-js.png";
import sqlLogo from "../assets/img/Sql.png";
import csharpLogo from "../assets/img/c-sharp-logo.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsLogo },
    { name: "React", img: reactLogo },
    { name: "Node.js", img: nodeLogo },
    { name: "SQL", img: sqlLogo },
    { name: "C#", img: csharpLogo },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Estas son algunas de las tecnologías con las que trabajo en el desarrollo de software.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.name} style={{ width: "100px", height: "100px" }} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
