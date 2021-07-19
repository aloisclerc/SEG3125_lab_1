import Gallery from "./Gallery";
import Filter from "./Filter";
import { Grid } from "@material-ui/core";
import { useState } from "react";

const Home = ({english}) => {
  const [radioValue, setRadioValue] = useState("all");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [liked, setLiked] = useState(false);
  

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const authorChange = (event) => {
    setAuthor(event.target.value);
  };
  const likedChange = (event) => {
    setLiked(!liked);
  };
  
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={6} md={3} key="1">
        <Filter
          radioValue={radioValue}
          handleChange={handleChange}
          name={name}
          author={author}
          nameChange={nameChange}
          authorChange={authorChange}
          liked={liked}
          likedChange={likedChange}
          english={english}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8} key="2">
        <Gallery radioValue={radioValue} name={name} author={author} liked={liked}/>
      </Grid>
    </Grid>
  );
};

export default Home;
