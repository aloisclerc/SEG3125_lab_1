import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "20px",
      width: "25ch",
    },
  },
  background: {
    backgroundColor: "#FDFDFD",
    margin: "68px 10px 0px 20px",
    padding: "20px 0px 40px 0px",
  },
  liked: {
      margin: '20px'
  },
  exhibit: {
      fontSize: 'large',
      textAlign: 'left'
  }
}));

const Filter = ({
  radioValue,
  handleChange,
  name,
  author,
  nameChange,
  authorChange,
  liked,
  likedChange,
  english
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.background} variant="outlined" elevation={0}>
      {english && <h2>Filter Results</h2>}
      {!english && <h2>Filtrer les résultats</h2>}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={name}
          onChange={nameChange}
        />
        <TextField
          id="outlined-basic"
          label="Author"
          variant="outlined"
          value={author}
          onChange={authorChange}
        />
      </form>
      <FormControl component="fieldset">
        {english && <FormLabel component="legend" className={classes.exhibit}> <h3>Exhibit</h3></FormLabel>}
        {!english && <FormLabel component="legend" className={classes.exhibit}> <h3>Exposition</h3></FormLabel>}
        <RadioGroup
          aria-label="genre"
          name="genre1"
          value={radioValue}
          onChange={handleChange}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="Impressionism"
            control={<Radio />}
            label="Impressionism"
          />
          <FormControlLabel value="Modern" control={<Radio />} label="Modern" />
          <FormControlLabel
            value="Classical"
            control={<Radio />}
            label="Classical"
          />
        </RadioGroup>
      </FormControl>
      {english && <FormControlLabel
        control={
          <Switch
            checked={liked}
            onChange={likedChange}
            name="checkedB"
            color="secondary"
          />
        }
        label="Liked Only"
        className={classes.liked}
      />}
      {!english && <FormControlLabel
        control={
          <Switch
            checked={liked}
            onChange={likedChange}
            name="checkedB"
            color="secondary"
          />
        }
        label="Aimé Seulement"
        className={classes.liked}
      />}
    </Paper>
  );
};

export default Filter;
