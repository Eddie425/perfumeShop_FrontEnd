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
            N°5
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="63OFFICIAL"
        subheader="首款香水"
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
          做為你在63OFFICIAL第一個旅程紀念品，我選擇了香水做為禮物給你。
        </Typography>
        {/* <Typography variant="subtitle1" color="textPrimary">
          味道
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
            前調：甜梨 與 蜂蜜 的乾淨清甜香氣
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            中調：薰衣草 / 天竺葵與鼠尾草 完美揉合質感東方香調
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            後調：雪松 / 乾燥木 恍如置身森林小木屋的木質基調
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
