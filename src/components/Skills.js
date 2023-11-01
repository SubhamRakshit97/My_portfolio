import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.jpeg";
import logo3 from "../assets/img/logo3.svg";
import logo4 from "../assets/img/logo4.svg";
import logo5 from "../assets/img/logo5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import React from "react";
import html from "../assets/img/html5.svg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
               <b>Strong :</b>  JavaScript, React (Router, Hooks), RESTful APIs,
                HTML/CSS, Git/GitHub, CLI, SQL (PostgreSQL) <br></br>
                <b>Experienced : </b>React, Redux, Python, Django, JQuery, Heroku,
                CI/CD <br></br>
                <b>Soft Skills : </b>Completed all projects on time, Modified the
                projects according to the customer's needs. <br></br> Worked and Managed
                with a 5 member cross-functional team, Communication, and
                Creativity.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={logo1} alt="Image" />
                  <h5>HTML/CSS/JS</h5>
                </div>
                <div className="item">
                  <img src={logo2} alt="Image" />
                  <h5>DJANGO</h5>
                </div>
                <div className="item">
                  <img src={logo3} alt="Image" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={logo4} alt="Image" />
                  <h5>REDUX</h5>
                </div>
                <div className="item">
                  <img src={logo5} alt="Image" />
                  <h5>PYTHON</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
