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
import imageUrl from "../resource/product/images/perfume_cover.jpg";
import blockIcon from "../resource/product/images/block_icon.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "grey",
  },
}));

export default function ProductCard() {
  const history = useHistory();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [ProductId, setProductId] = React.useState("0");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleProductClick = (event) => {
    setProductId(event.currentTarget.id);

    history.push("/productDetails");
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={ blockIcon } />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="63OFFICIAL"
        subheader="????????????"
      />
      <CardMedia
        id="product"
        className={classes.media}
        image={imageUrl}
        title="63OFFICIAL"
        onClick={handleProductClick}
      />
      <CardContent>
        <Typography
          variant="h6"
          color="textPrimary"
          className={classes.textFont}
        >
          ????????????63OFFICIAL??????????????????????????????????????????????????????????????????
        </Typography>
        {/* <Typography variant="subtitle1" color="textPrimary">
          ??????
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            ??????????????? ??? ?????? ?????????????????????
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            ?????????????????? / ????????????????????? ??????????????????????????????
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            ??????????????? / ????????? ??????????????????????????????????????????
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
