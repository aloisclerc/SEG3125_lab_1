import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Grid,
  IconButton,
} from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PaintingCard = ({ painting }) => {
  const classes = useStyles();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  console.log(painting.title);
  return (
    <Grid item xs={12} sm={6} md={3} key={painting.id}>
      <Card className={classes.root}>
        <CardActionArea onClick={() => history.push("/" + painting.id)}>
          <CardMedia
            className={classes.media}
            image={painting.source}
            title={painting.liked.toString()}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {painting.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              by {painting.author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={9} md={9} key="1">
              <Button
                size="small"
                color="secondary"
                onClick={() => history.push("/" + painting.id)}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={3} sm={3} md={3} key="2">
              <IconButton
                edge="start"
                className="menu"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  painting.liked = !painting.liked;
                  console.log(painting.liked);
                  setToggle(!toggle);
                }}
              >
                  {!painting.liked && <FavoriteBorderIcon />}
                  {painting.liked && <FavoriteIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PaintingCard;
