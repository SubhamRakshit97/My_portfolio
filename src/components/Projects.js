import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import proj31 from "../assets/img/proj31.png";
import proj4 from "../assets/img/proj4.png";
import proj5 from "../assets/img/proj5.png";
import proj6 from "../assets/img/proj6.png";
import proj7 from "../assets/img/proj7.png";
import proj8 from "../assets/img/proj8.png";
import proj9 from "../assets/img/proj9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Hive TechWear",
      description: "Clothing Website",
      imgUrl: proj1,
    },
    {
      title: "Budget Box",
      description: "Transaction Tracking App",
      imgUrl: proj2,
    },
    {
      title: "Cinema Paradiso",
      description: "Movie watching app",
      imgUrl: proj31,
    }]
    const projects1 = [
    {
      title: "Hunger Captain",
      description: "Online Food and Beverages website",
      imgUrl: proj4,
    },
    {
      title: "A To Z",
      description: "E-Commerce Website",
      imgUrl: proj5,
    },
    {
      title: "European Tourism",
      description: "A travelling website",
      imgUrl: proj6,
    },
  ];
  const projects2 = [
    {
      title: "Twitter Clone",
      description: "Online chatting App",
      imgUrl: proj7,
    },
    {
      title: "A To Z",
      description: "E-Commerce Website",
      imgUrl: proj8,
    },
    {
      title: "BMI Calculator",
      description: "Checking your Body Mass Index",
      imgUrl: proj9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p className="projects">
                    Welcome to my projects section! This is where I showcase a
                    selection of the web development projects I've had the
                    privilege of working on. Each project represents a unique
                    challenge and an opportunity to push the boundaries of
                    what's possible on the web. As a full-stack web developer,
                    I've had the pleasure of working on a diverse range of
                    projects, from small web applications to large-scale
                    e-commerce platforms. My approach to each project is rooted
                    in a passion for creating exceptional user experiences while
                    delivering robust, efficient, and scalable solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects List 1 </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects List 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Other Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
