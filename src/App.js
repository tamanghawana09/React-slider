import React from "react";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      img1,
  },
  {
    label: "Second Picture",
    imgPath:
      img2,
  },
  {
    label: "Third Picture",
    imgPath:
      img3,
  },
];

const App = () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);

  // Function to go to the next picture
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Function to go to the previous picture
  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div style={{ marginLeft: "40%" }}>
      <h2>How to Create Image Slider in ReactJS?</h2>
      <div style={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          style={{
            height: 50,
            display: "flex",
            paddingLeft: theme.spacing(4),
            backgroundColor: theme.palette.background.default,
            alignItems: "center",
          }}
        >
        </Paper>
        <img
          src={MyCollection[index].imgPath}
          style={{
            height: 255,
            width: "100%",
            maxWidth: 400,
            display: "block",
            overflow: "hidden",
          }}
          alt={MyCollection[index].label}
        />
        <MobileStepper
          variant="text"
          position="static"
          activeStep={index}
          steps={CollectionSize}
          backButton={
            <Button
              size="small"
              onClick={goToPreviousPicture}
              disabled={index === 0} 
            >
              <KeyboardArrowLeftIcon /> Previous
            </Button>
          }
          nextButton={
            <Button
              size="small"
              onClick={goToNextPicture}
              disabled={index === CollectionSize - 1} 
            >
              Next <KeyboardArrowRightIcon />
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default App;
