import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[5],
    outline: 0,
  },
}));

export default function LoginForm(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const basicAuthorize = () => {
    fetch("https://perfumeshop.herokuapp.com/perfume/auth/login", {
    // fetch("http://localhost:8080/perfume/auth/login", {
      headers: {
        // Authorization: "Basic " + window.btoa(email + ":" + password),
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf8",
        credentials: "include",
      },
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  return (
    <div>
      <Modal
        open={props.status}
        onClose={props.close}
        disableEnforceFocus
        disableAutoFocus
        // disablePortal
        className={classes.paper}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <form className="form">
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{
                fullWidth: true,
              }}
              handleChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <CustomInput
              labelText="Password"
              id="password"
              formControlProps={{
                fullWidth: true,
              }}
              handleChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Button
              type="button"
              color="primary"
              className="form__custom-button"
              onClick={basicAuthorize}
            >
              Log in
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
