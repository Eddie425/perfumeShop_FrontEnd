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
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import imageUrl from "../resource/product/images/perfume_black.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer"
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
    backgroundColor: 'grey',
  },
}));

export default function StaffCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [staffId, setStaffId] = React.useState("0");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleStaffClick = (event) => {
    setStaffId(event.currentTarget.id);
    props.setPage(event.currentTarget.id);
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
        title="CHANEL"
        subheader="Paris"
      />
      <CardMedia
        id="product"
        className={classes.media}
        image={imageUrl}
        title="Paella dish"
        onClick={handleStaffClick}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          N°5 超越世代，歷久彌新 香奈兒女士以創造未來的的香氛為目標，打造出
          N°5。 結合花束馨香的前瞻性香氛創作，香氣中流淌著女性的 優雅姿態。 N°5
          成為未來的一部分
        </Typography>
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
          <Typography paragraph>產品說明</Typography>
          <Typography paragraph>
            N°5，女性魅力的極致精髓。散發經典傳奇的乙醛花束香氣。香精以頂級原材料製成，為香水最珍貴的表現形式。封存於極簡設計的獨特瓶身，採用
            Baudruchage 手工封瓶技術，並點綴如寶石切割般形態的瓶蓋。
          </Typography>
          <Typography paragraph>
            N°5 與瑪莉詠·柯蒂亞 (Marion Cotillard)
            瑪莉詠·柯蒂亞分享了她對香奈兒品牌的第一印象：
            「我一直以來都非常喜歡香奈兒。就像是我憧憬的夢想。很難描述美夢成真的感覺。
            香奈兒品牌集所有美好於一身，讓所有人皆沉浸在妙不可言的超凡體驗。」
          </Typography>
          <Typography paragraph>
            一個關於邂逅與時空轉換的美麗故事。
            一支洋溢歡愉活力的舞蹈，歌頌女性生活中的美好，女主角和男伴透過天際之舞結合，超越夢境，化夢想為真實。
            從巴黎浪漫登月，譜寫一段自由戀曲。
          </Typography>
          <Typography>
            靈感源自嘉柏麗·香奈兒所設計穿著的一款經典洋裝，透過維吉妮·維婭
            (Virginie Viard) 重新詮釋賦予新風貌。 由 Lesage
            刺繡工坊精心打造的一款刺繡蕾絲洋裝，耀眼的金色系令人聯想起香水所散發的永恆璀璨光芒。
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
