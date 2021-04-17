import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import MemberDetails from "./memberDetails";
import "../order/order.css";
import "./form.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[5],
    outline: 0,
  },
  main: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));

export default function SignUpForm(props) {
  const classes = useStyles();

  const closeSignUpForm = () => {
    props.close();
  };

  return (
    <Dialog
      open={props.status}
      onClose={closeSignUpForm}
      className={classes.paper}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography component="h1" variant="h4" align="center">
              SIGN UP
            </Typography>
            <MemberDetails onClose={closeSignUpForm} />
          </Container>
        </React.Fragment>
      </div>
    </Dialog>
  );
}
