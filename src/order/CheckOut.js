import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OrderDetails from "./OrderDetails";
import CheckOrderForm from "./CheckOrderForm";
import Review from "./Review";

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["訂單詳情", "訂單確認", "訂單成立"];

export default function Checkout(props) {
  const classes = useStyles();
  const activeStep = useSelector((state) => state.web.checkOutStep);

  const dispatch = useDispatch();

  const getStepContent = () => {
    console.log("activeStep -  getStepContent => ", activeStep);
    switch (activeStep) {
      case 0:
        return <OrderDetails />;
      case 1:
        return <CheckOrderForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = (e) => {
    dispatch({
      type: "CHECKOUT_CHANGE_STEP",
      activeStep: activeStep + 1,
    });
    if (e.target.innerText === "PLACE ORDER") {
      
    }
  };

  const handleBack = () => {
    dispatch({
      type: "CHECKOUT_CHANGE_STEP",
      activeStep: activeStep - 1,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Paper className={classes.paper} variant="outlined">
          <Typography component="h1" variant="h4" align="center">
            CHECKOUT
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  感謝您的訂購。
                </Typography>
                <Typography variant="subtitle1">
                  您的訂單號碼為 #2001539
                </Typography>
                <Typography variant="subtitle1">
                  您將收到訂單確認 Email, 商品寄出後會再 Email 通知您。
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent()}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <>
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        color="primary"
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                    </>
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
