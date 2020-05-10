import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "../App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import Loading from "../components/Loading";

const Home = () => {
  // création des états pour l'affichage des profils
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const MyButton = styled(Button)({
    color: "#BC48D1",
    height: 44,
    padding: "0 30px",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Fetching data failed");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Tous les profils</title>
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <Grid className="container-home">
          {data.results.map((user, index) => {
            return (
              <Grid className="all-cards" key={index}>
                <Card className="card">
                  <CardMedia
                    component="img"
                    alt={user.name.first}
                    className="picture-user"
                    src={user.picture.medium}
                  />
                  <CardContent className="card-info-user">
                    <div>
                      <div className="name-profile">
                        {user.name.first} {user.name.last}
                      </div>
                      <div>{user.location.country}</div>
                      <div>{user.dob.age} ans</div>
                    </div>
                  </CardContent>
                  <CardActions>
                    <MyButton variant="outlined">Voir son profil</MyButton>
                    <MyButton variant="outlined">Contacter</MyButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};
export default Home;
