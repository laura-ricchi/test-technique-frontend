import React from "react";
import "../assets/css/Common.css";
import "../assets/css/Presentation.css";
import { Grid } from "@material-ui/core";

const Presentation = () => {
  return (
    <Grid className="container-presentation">
      <Grid className="presentation-meet-world">
        Découvrez des nouvelles personnes lors de vos voyages aux quatres coins
        du monde et rejoignez une communauté de globe-trotteurs ...
      </Grid>
      <Grid className="sentence-presentation">
        À vos marques, prêts, voyagez !
      </Grid>
    </Grid>
  );
};

export default Presentation;
