import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import AuthService from "../api/service/AuthService";
import { useHistory } from "react-router-dom";
import "./form.css";

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
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const basicAuthorize = () => {
    (async () => {
      const response = await AuthService.authLogin(email, password)(dispatch);
      if (response.token) {
        console.log("hereeeeee");
        props.close();
        history.push("/");
      }
    })();
  };

  return (
    <div>
      <Modal
        open={props.status}
        onClose={props.close}
        disableEnforceFocus
        disableAutoFocus
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
