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
import { useHistory } from "react-router-dom";
import PaintingCard from "./PaintingCard";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PaintingList = ({ paintings, title }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="painting-list">
      <h2>{title}</h2>
      <div className="list">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {paintings.map((painting) => (
            <PaintingCard painting={painting} />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PaintingList;
