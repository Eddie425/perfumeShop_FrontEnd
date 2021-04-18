import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MainMenuItem from "./mainMenu/MainMenuItem.js";
import MenuButton from "./mainMenu/MenuButton.js";
import MainMenu from "./mainMenu/MainMenu.js";
import LoginForm from "../../member/login.js";
import SignUpForm from "../../member/signup.js";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import AuthService from "../../api/service/AuthService";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MenuAppBar(props) {
  const history = useHistory();

  const alert = useSelector((state) => state.web.alert);

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [menus, setMenus] = useState([
    "About Us",
    "Our Products"
  ]);
  const logOutMenu = [
    { key: "login", value: "登入" },
    { key: "signup", value: "註冊" },
  ];

  const logOutMenuAtCheckoutPage = [{ key: "login", value: "登入" }];

  const logInMenu = [
    { key: "orders", value: "訂單" },
    { key: "logout", value: "登出" },
  ];

  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const setPage = () => {
    history.push("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const openForm = (e) => {
    switch (e.target.id) {
      case "login":
        setLoginFormOpen(true);
        setAnchorEl(null);
        break;
      case "signup":
        setSignUpFormOpen(true);
        setAnchorEl(null);
        break;
      case "orders":
        history.push("/memberOrders");
        break;
      case "logout":
        setAnchorEl(null);
        dispatch({
          type: "AUTH_LOGOUT_SUCCESS",
        });
        dispatch({
          type: "ALERT_CONTROL",
          alert: {
            open: true,
            vertical: "top",
            horizontal: "center",
            severity: "warning",
            message: "已登出！",
          },
        });
        break;
      default:
        break;
    }
  };

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  const closeSignUpForm = () => {
    setSignUpFormOpen(false);
  };

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: "99",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      background: "black",
      width: "100%",
      color: "white",
      fontFamily: "Lobster",
    },
    logo: {
      margin: "0 auto",
      cursor: "pointer",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      filter: { menuOpen } ? "blur(2px)" : null,
      transition: "filter 0.5s ease",
    },
  };

  const menuItems = menus.map((val, index) => {
    return (
      <MainMenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={handleLinkClick}
      >
        {val}
      </MainMenuItem>
    );
  });

  const checkIsInCheckoutPage = () => {
    if (window.location.href.includes("checkout")) {
      return memberlogOutMenuAtCheckoutPage;
    } else {
      return memberLogOutStatus;
    }
  };

  const memberLogOutStatus = logOutMenu.map((obj, index) => {
    return (
      <MenuItem key={index} id={obj.key} onClick={openForm}>
        {obj.value}
      </MenuItem>
    );
  });

  const memberlogOutMenuAtCheckoutPage = logOutMenuAtCheckoutPage.map(
    (obj, index) => {
      return (
        <MenuItem key={index} id={obj.key} onClick={openForm}>
          {obj.value}
        </MenuItem>
      );
    }
  );

  const memberLogInStatus = logInMenu.map((obj, index) => {
    return (
      <MenuItem key={index} id={obj.key} onClick={openForm}>
        {obj.value}
      </MenuItem>
    );
  });

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({
      type: "ALERT_CONTROL",
      alert: {
        open: false,
        vertical: "top",
        horizontal: "center",
        severity: "",
        message: "",
      },
    });
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: alert.vertical,
          horizontal: alert.horizontal,
        }}
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      <div>
        <div style={styles.container}>
          <MenuButton open={menuOpen} onClick={handleMenuClick} color="white" />
          <div style={styles.logo} onClick={setPage}>
            63 official
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {AuthService.checklogStatus()
                ? memberLogInStatus
                : window.location.href.includes("checkout")
                ? memberlogOutMenuAtCheckoutPage
                : memberLogOutStatus}
            </Menu>
          </div>
        </div>
        <MainMenu open={menuOpen}>{menuItems}</MainMenu>
      </div>
      <LoginForm status={loginFormOpen} close={closeLoginForm} />
      <SignUpForm status={signUpFormOpen} close={closeSignUpForm} />
    </>
  );
}
