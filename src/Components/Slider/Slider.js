import React from "react";
import "./Slider.css";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import image1 from "../../assets/img/groupe1.jpg";
import image2 from "../../assets/img/groupe2.jpg";
import image3 from "../../assets/img/groupe3.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Slider() {
  const images = [
    { imgPath: `${image1}`, label: "Festival les Maboul Rock 2016" },
    { imgPath: `${image2}`, label: "Bessieres 2015" },
    { imgPath: `${image3}`, label: "V and B de Labège 2020" },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Paper className="slider">
        <Paper square className="slider-top" sx={{ color: "#0d47a1" }}>
          {images[activeStep].label}
        </Paper>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 400,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Paper>
    </>
  );
}
