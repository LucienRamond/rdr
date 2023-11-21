import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Slider from "../Components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Container>
        <Paper elevation={6}>
          <Slider />
        </Paper>
      </Container>
    </>
  );
}
