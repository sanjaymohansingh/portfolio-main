import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import state from "../../Assets/mern-estate.png";
import filesharing from "../../Assets/file-sharing.png";
import store from "../../Assets/e-commerce.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={state}
                isBlog={false}
                title="MERN-Estate"
                description="This project is a comprehensive Real Estate Marketplace, employing a MERN stack (MongoDB, Express, React, Node.js) for a robust and scalable solution. The system not only integrates industry-standard security practices for user authentication but also provides a platform for users to list properties for sale and rent. The architecture ensures the confidentiality and integrity of user data, making it a secure and reliable choice for real estate transactions."
                ghLink="https://mern-estate-yfmh.onrender.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={filesharing}
                isBlog={false}
                title="MERN-File Sharing Platform"
                description="This MERN (MongoDB, Express, React, Node.js) file-sharing platform is designed to facilitate easy and secure file uploads and downloads. The platform uses industry-standard security practices and leverages a modern tech stack to provide a seamless and user-friendly experience for both uploading and downloading files."
                ghLink="https://mern-file-sharing.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={store}
                isBlog={false}
                title="E-commerce Store"
                description="Discover a modern and feature-rich online shopping experience with our React Redux E-commerce Store. Crafted with cutting-edge technologies such as React, Redux, and React Bootstrap, this platform offers seamless navigation, powerful state management, dynamic routing, and a responsive design."
                ghLink="https://redux-concept.onrender.com/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
