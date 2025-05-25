import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">renusree </span>
            from <span className="purple"> vijayawada, India.</span>
            <br />
            I am currently studying at vit ap, vijayawada.
            <br />
            I am doing my cse with aiml in  vit ap university.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending workshops
            </li>
            <li className="about-activity">
              <ImPointRight /> exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">renusree</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
