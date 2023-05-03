import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fab from '@mui/material/Fab';
import { Container } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SlideComponent({images}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Box sx={{ position: 'relative' }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000} 
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                 
                  display: 'block',
                  maxWidth:'100%',
                  overflow: 'hidden',
                  width: '100%',
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
        position="fixed"
        variant="dots" 
        color='inherit'
        activeStep={activeStep}
        sx={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'transparent',
        }}
      />
      <Fab
        aria-label="previous"
        size="large"
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          ml: 1,
        }}
      >
        <KeyboardArrowLeft />
      </Fab>
      <Fab
        aria-label="next"
        size="large"
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          mr: 1,
        }}
      >
        <KeyboardArrowRight />
      </Fab>
    </Box>
    </Container>
  );
}

export default SlideComponent;
