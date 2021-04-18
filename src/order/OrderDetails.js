import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TWzipcode from "react-twzipcode";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "../order/order.css";

const useStyles = makeStyles((theme) => ({
  textTitle: {
    textAlign: "left",
    color: "black",
    fontWeight: 600,
    fontSize: 22,
  },
  secondTitle: {
    textAlign: "left",
    color: "black",
    padding: "50px 0px 0px 0px",
  },
  paper: {
    padding: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

export default function OrderDetails() {
  const classes = useStyles();
  const member = useSelector((state) => state.member);
  const inputLogic = useSelector((state) => state.web.inputLogic);
  const activeStep = useSelector((state) => state.web.checkOutStep);

  const [inputValue, setInputValue] = useState({
    checkEmail: "",
    checkPassword: "",
    showPassword: false,
  });

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    let inputMember = { ...member };
    switch (event.target.name) {
      case "checkEmail":
        setInputValue({
          ...inputValue,
          checkEmail: event.target.value,
        });
        break;

      case "checkPassword":
        setInputValue({
          ...inputValue,
          checkPassword: event.target.value,
        });
        break;

      default:
        inputMember[event.target.name] = event.target.value;
        dispatch({
          type: "FILL_MEMBER_DETAIL",
          member: inputMember,
        });
        break;
    }
  };

  const handleAddressChange = (data) => {
    member.city = data.county;
    member.district = data.district;
    member.postalCode = data.zipcode;
  };

  const handleClickShowPassword = () => {
    setInputValue({
      ...inputValue,
      showPassword: !inputValue.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOrderSubmit = () => {
    dispatch({
      type: "CHECKOUT_CHANGE_STEP",
      activeStep: activeStep + 1,
    });
  };

  useEffect(() => {
    let inputLogicArray = [
      inputLogic.isName,
      inputLogic.isEmail,
      inputLogic.isPhone,
      inputLogic.isPassword,
    ];

    inputLogicArray.forEach((x) => {
      ValidatorForm.addValidationRule(x.key, x.logic);
    });
  }, []);

  return (
    <React.Fragment>
      <ValidatorForm
        onSubmit={handleOrderSubmit}
        onError={(errors) => console.log(errors)}
      >
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={8}>
              <DialogContentText className={classes.textTitle}>
                收件人資訊
              </DialogContentText>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                name="name"
                label="姓名"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                validators={[inputLogic.required.key, inputLogic.isName.key]}
                errorMessages={[
                  inputLogic.required.errorText,
                  inputLogic.isName.errorText,
                ]}
                onChange={handleInputChange}
                value={member.name}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                name="phone"
                label="手機"
                fullWidth
                autoComplete="phone"
                variant="standard"
                validators={[inputLogic.required.key, inputLogic.isPhone.key]}
                errorMessages={[
                  inputLogic.required.errorText,
                  inputLogic.isPhone.errorText,
                ]}
                onChange={handleInputChange}
                value={member.phone}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                name="email"
                label="Email address"
                fullWidth
                autoComplete="email"
                variant="standard"
                validators={[inputLogic.required.key, inputLogic.isEmail.key]}
                errorMessages={[
                  inputLogic.required.errorText,
                  inputLogic.isEmail.errorText,
                ]}
                onChange={handleInputChange}
                value={member.email}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextValidator
                name="password"
                label="密碼"
                fullWidth
                type={inputValue.showPassword ? "text" : "password"}
                autoComplete="current-password"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {inputValue.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                validators={[
                  inputLogic.required.key,
                  inputLogic.isPassword.key,
                ]}
                errorMessages={[
                  inputLogic.required.errorText,
                  inputLogic.isPassword.errorText,
                ]}
                onChange={handleInputChange}
                value={member.password}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}></Grid>
            <Grid item xs={12} sm={12}>
              <TWzipcode
                css={[
                  "form-control countyDist-sel",
                  "form-control countyDist-sel",
                  "form-control zipcode",
                ]}
                countyValue={member.city}
                districtValue={member.district}
                zipcodeValue={member.postalCode}
                handleChangeCounty={handleAddressChange}
                handleChangeDistrict={handleAddressChange}
                handleChangeZipcode={handleAddressChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                name="address"
                label="住址"
                fullWidth
                autoComplete="shipping address"
                variant="standard"
                validators={[inputLogic.required.key]}
                errorMessages={[inputLogic.required.errorText]}
                onChange={handleInputChange}
                value={member.address}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            NEXT
          </Button>
        </DialogActions>
      </ValidatorForm>
    </React.Fragment>
  );
}
