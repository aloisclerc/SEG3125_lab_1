import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate,
} from "react-switch-lang";
import { FormControlLabel, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#FAA",
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  gallery: {
    textAlign: "right",
    margin: "20px",
  },
  liked: {
    margin: "0 0 0 5px"
  }
}));

const Navbar = ({ english, langChange }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        {/* <IconButton edge="start" className="menu" color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton> */}
        {english && (
          <Typography
            variant="h5"
            className="home"
            onClick={() => history.push("/")}
          >
            Art With You
          </Typography>
        )}
        {!english && (
          <Typography
            variant="h5"
            className="home"
            onClick={() => history.push("/")}
          >
            L'art Avec Vous
          </Typography>
        )}
        {english && <Button
          color="inherit"
          className={classes.gallery}
          onClick={() => history.push("/")}
        >
          Gallery
        </Button>}
        {!english && <Button
          color="inherit"
          className={classes.gallery}
          onClick={() => history.push("/")}
        >
          Galerie
        </Button>}
        <p>FR</p>
        <FormControlLabel
        control={
          <Switch
            checked={english}
            onChange={langChange}
            name="Lang"
            color="secondary"
          />
        }
        className={classes.liked}
      />
      <p>EN</p>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
