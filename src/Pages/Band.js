import React from "react";
import "./Pages.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Yves from "../assets/img/members/yves.jpg";
import Michrophone from "../assets/icons/microphone.svg";
import Laurent from "../assets/img/members/laurent.jpg";
import Guitar1 from "../assets/icons/electric-guitar.svg";
import Vincent from "../assets/img/members/vincent.jpg";
import Guitar2 from "../assets/icons/electric-guitar2.svg";
import Fred from "../assets/img/members/fred.jpg";
import Bass from "../assets/icons/bass.svg";
import Lucien from "../assets/img/members/lucien.jpg";
import Drum from "../assets/icons/drum.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Band() {
  const mobileVersion = useMediaQuery("(max-width:890px)");

  const members = [
    {
      name: "Yves",
      picture: Yves,
      logo: Michrophone,
      instrument: "Chant",
    },
    {
      name: "Laurent",
      picture: Laurent,
      logo: Guitar1,
      instrument: "Guitare Lead",
    },
    {
      name: "Vincent",
      picture: Vincent,
      logo: Guitar2,
      instrument: "Guitare Rythmique",
    },
    {
      name: "Fred",
      picture: Fred,
      logo: Bass,
      instrument: "Basse",
    },
    {
      name: "Lucien",
      picture: Lucien,
      logo: Drum,
      instrument: "Batterie",
    },
  ];

  return (
    <>
      <Container maxWidth={false}>
        <Paper className="band-page">
          <h1>Le groupe</h1>
          <div className="title-separator"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            excepturi amet inventore libero accusantium delectus, odio dicta
            sunt tempora aut quod porro pariatur consectetur doloribus. Ratione
            tempore, eos exercitationem praesentium quidem deleniti totam quos
            officia quas. Est saepe, nemo facere provident in pariatur. Porro
            nobis, inventore dolores eum in quas voluptate aliquid fugit
            doloribus adipisci modi odit. Ipsa numquam veritatis delectus vel
            eveniet doloribus ut, deserunt neque, debitis sint autem eaque ea.
            Sapiente, fugiat similique. Libero sit eum iusto esse delectus
            laudantium hic aperiam obcaecati, unde explicabo fugiat. Excepturi
            libero quisquam aperiam a eaque tenetur autem voluptatum iste
            maiores reiciendis!
          </p>
          <Grid
            columns={10}
            container
            spacing={2}
            sx={
              !mobileVersion
                ? {
                    marginInline: "auto",
                    justifyContent: "center",
                    width: "90%",
                    paddingRight: "16px",
                    paddingBlock: "16px",
                  }
                : {
                    paddingInline: "16px",
                    justifyContent: "center",
                    paddingBlock: "16px",
                  }
            }
          >
            {members.map((member) => (
              <Grid item xs={10} sm={5} md={3} lg={2}>
                <Card elevation={3} className="card-member">
                  <CardHeader title={member.name} />
                  <CardMedia
                    component="img"
                    sx={{ height: "170px" }}
                    image={member.picture}
                    alt={member.name}
                  />
                  <CardContent>
                    <img src={member.logo} className="card-logo" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
