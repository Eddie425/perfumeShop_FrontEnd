import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const member = useSelector((state) => state.member);

  const addresses = [
    member.postalCode,
    member.city,
    member.district,
    member.address,
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        寄送資訊確認
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            寄送地址
          </Typography>
          <Typography gutterBottom>
            姓名 : {member.lastName + member.firstName}
          </Typography>
          <Typography gutterBottom>地址 : {addresses.join(" ")}</Typography>
          <Typography gutterBottom>手機 : {member.phone}</Typography>
          <Typography gutterBottom>Email : {member.email}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
