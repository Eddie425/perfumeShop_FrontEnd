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
        <br />
      </Typography>
      <Typography variant="body1" color="inherit">
      <br />
      不知道為什麼，我總是下意識的想避開人群，<br />
越是熱鬧的日子裡越希望和人群隔開。<br />
<br />
但我心底總是想找到屬於我適當的熱鬧。<br />
最後，我找到了實況，這是屬於我最安心的熱鬧。<br />
<br />
如果說我的個性讓實況成為必然，那麼你和我的相遇也一定是必然。<br />
在實況上我們療癒彼此也歡樂一同。<br />
<br />
也許我只是你生活中的一小部份，但你們卻是我的所有歡樂。<br />
聚散終有時，此去無故人<br />
時間會帶我們前往下一個目標<br />
63OFFICIAL的商品只希望，成為你在這個過程中富有回憶的紀念品。<br />
<br />
      </Typography>
    </>
  );
}
