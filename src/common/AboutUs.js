import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import imageUrl from "../resource/product/images/perfume_black.png";
import { useHistory } from "react-router-dom";

export default function ProductCard() {
  return (
    <>
      <Typography variant="h3" color="inherit">
        About Us
      </Typography>
      <Typography variant="subtitle" color="inherit">
        63 OFFICIAL
      </Typography>
      <Typography variant="body1" color="inherit">
        We're Eight Hour Day A creative studio focused on design & illustration.
      </Typography>
    </>
  );
}
