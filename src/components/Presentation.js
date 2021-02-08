import React from "react";
import "../assets/css/Common.css";
import "../assets/css/Presentation.css";
import { Container } from "@material-ui/core";
import HappyPeople from "../assets/img/happy-people.png";
import HappyPeople2 from "../assets/img/happy-people2.jpg";
import Travel from "../assets/img/travel.jpg"

const Presentation = () => {
  return (
    <Container fluid className="container-presentation">
      <div className="presentation-meetWorld">
        <div className="firstBlock-presentation">
          <div className="text-presentation">
            <p>
              Discover new people as you travel all over the place of the world
              and join a community of globetrotters.
            </p>
          </div>
          <div className="picture-presentation">
            <img
              src={HappyPeople}
              alt="happy-people"
              className="happy-people-picture"
            />
          </div>
        </div>
        <div className="secondBlock-presentation">
          <div className="picture-presentation">
            <img
              src={Travel}
              alt="happy-people"
              className="travel-people-picture"
            />
          </div>
          <div className="text-presentation">
            <p>Ready... </p>
          </div>
        </div>
        <div className="thirdBlock-presentation">

          <div className="text-presentation">
            <p>
             GO !!!!
            </p>
          </div>
          <div className="picture-presentation">
            <img
              src={HappyPeople2}
              alt="happy-people"
              className="happy-people-picture"
            />
          </div>
        </div>

      </div>
    </Container>
  );
};

export default Presentation;
