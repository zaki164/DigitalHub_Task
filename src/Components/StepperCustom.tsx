import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';

const steps = [
  {
    label: 'The request has been accepted',
    description: `18 Set 2024 ; 08:25 PM`,
  },
  {
    label: 'Go to Pickup',
    description: '18 Set 2024 ; 08:25 PM',
  },
  {
    label: 'Picked Up',
    description: `18 Set 2024 ; 08:25 PM`,
  },
  {
    label: 'On The Way',
    description: `18 Set 2024 ; 08:25 PM`,
  },
  {
    label: 'Delivered',
    description: `18 Set 2024 ; 08:25 PM`,
  },
];

const StepperCustom = () => {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = React.useState(2);

  const isRTL = i18n.language === 'ar';

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical"
        sx={{
          ".MuiStepConnector-root": {
            marginLeft: isRTL ? "0" : "12px",
            marginRight: isRTL ? "20px" : "0",
          },
          ".MuiStepConnector-line": {
            borderLeftStyle: isRTL ? "none" : "solid",
            borderLeftWidth: isRTL ? "0" : "1px",
            borderRightStyle: isRTL ? "solid" : "none",
            borderRightWidth: isRTL ? "1px" : "0"
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}
            sx={{
              ".Mui-completed": {
                color: "#324001 !important"
              },
              ".Mui-active": {
                color: "#324001 !important"
              },
              ".MuiStepLabel-root": {
                textAlign: isRTL ? "right !important" : "left"
              },
            }}>
            <StepLabel
            >
              <div className='flex_between gap-2 ps-2 rtl:font-Cairo'>
                <div className='flex-1 rtl:ps-2'>
                  <p className='text-base-l text-mainColor font-bold'>
                    {t(step.label)}
                  </p>
                  <p className='text-sm-base text-grayColor font-medium'>
                    {step.description}
                  </p>
                </div>
                <Checkbox checked={index < activeStep} size='large' disabled sx={{ '& .MuiSvgIcon-root': { color: "#324001" } }} />
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
export default StepperCustom