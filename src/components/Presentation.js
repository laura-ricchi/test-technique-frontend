import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/Common.css";
import "../assets/css/Presentation.css";
import { Button } from "@material-ui/core";
import HappyPeople from "../assets/img/happy-people.png";
import HappyPeople2 from "../assets/img/happy-people2.jpg";
import Travel from "../assets/img/travel.jpg";

const Presentation = () => {
  const history = useHistory();

  return (
    <div className="container-presentation">
      <div className="presentation-meetWorld">
        <div className="firstBlock-presentation">
          <div className="text-presentation">
            <h2>New Social Media</h2>
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
            <h2>Do you want to meet people ?</h2>
            <p>Millions of users are waiting for you !</p>
          </div>
        </div>
        <div className="thirdBlock-presentation">
          <div className="text-presentation">
            <h2>Are you ready ? </h2>
            <p>Don't waist time and register you!</p>
              <Button       className="button" onClick={() => {
          history.push("/signup");
        }}>
               SignUp
              </Button>
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
    </div>
  );
};

export default Presentation;
