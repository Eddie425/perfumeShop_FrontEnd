import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import OrderService from "../api/service/OrderService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "30px 0px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ProductOrderDetails() {
  const classes = useStyles();
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  const emptyList = <Paper className={classes.paper}>查無訂單</Paper>;

  useEffect(() => {
    (async () => {
      const response = await OrderService.fetchOrderDetails()(dispatch);
      if (!response.includes("失敗")) {
        console.log("response >>>>>>>>>", response);
        // if (!response.length === 0) {
        console.log("HEREEEEEE");
        let temp = [];
        response.map((order, index) => temp.push(order));
        console.log("TEMP  ====> ", temp);
        setOrders(temp);
        // }
      } else {
        dispatch({
          type: "ALERT_CONTROL",
          alert: {
            open: true,
            vertical: "top",
            horizontal: "center",
            severity: "error",
            message: response,
          },
        });
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Paper className={classes.paper} variant="outlined">
          <Typography
            className={classes.title}
            component="h1"
            variant="h4"
            align="center"
          >
            訂單
          </Typography>
          {orders.length === 0
            ? emptyList
            : orders.map((order, index) => (
                <div key={index} className={classes.root}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src={product.src[0]}
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm={6} container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                              {order.recv_name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {order.address}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {order.phone}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">
                              總額 : {order.total_price}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              ))}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
