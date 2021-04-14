import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

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
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);

  return (
    <>
      <div className={classes.root}>
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
                    {product.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {product.description}
                  </Typography>
                  {/* <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography> */}
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    數量 : {cart[0].quantity}
                  </Typography>
                  <Typography variant="subtitle1">
                    總額 : {cart[0].quantity * product.price}
                  </Typography>
                  {/* <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Remove
                  </Typography> */}
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$ {product.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}
