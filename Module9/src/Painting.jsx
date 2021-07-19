import { PaintingArray } from "./PaintingArray";
import { Grid } from "@material-ui/core";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { auto } from "async";

const useStyles = makeStyles({
  root: {
    margin: "40px",
  },
  details: {
    margin: "0px 20px 0px 20px",
  },
  header: {
    marginTop: "0px",
  },
  enterComment: {
    width: "100%",
    marginTop: "2%",
  },
  button: {
    padding: "20px",
  },
  buttonDiv: {
    padding: "15% 60% 0 0",
    justifyContent: "start",
    alignItems: "start",
  },
  paper: {
    padding: "20px",
    textAlign: "left",
    width: "80%",
  },
  comment: {
    fontSize: "large",
  },
  commentDate: {
    textAlign: "right",
    opacity: "0.6",
  },
  commentSection: {
    margin: "0 0 0 10%",
  },
});

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Painting = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme({});
  const painting = PaintingArray[window.location.pathname.substring(1) - 1];
  const [comment, setComment] = useState("");
  const sendComment = (event) => {
    let d = new Date();
    painting.comments.push([comment, d]);
    setComment("");
    console.log(painting.comments);
  };
  const commentChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={6} key="1">
          <InnerImageZoom
            src={painting.source}
            zoomSrc={painting.source}
            zoomScale="1.3"
          />
        </Grid>
        <Grid item xs={12} sm={5} md={5} key="2" className={classes.details}>
          <h1 className={classes.header}>{painting.title}</h1>
          <p>by {painting.author}</p>
          <p>{painting.description}</p>
          <ThemeProvider theme={muiTheme}>
            <AudioPlayer src="https://www.ccsoh.us/site/handlers/filedownload.ashx?moduleinstanceid=2825&dataid=1749&FileName=20meterPACER_2017.mp3" />
          </ThemeProvider>
          ;
        </Grid>
      </Grid>

      <h1>Comment Section:</h1>
      <div className={classes.commentSection}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-center"
        >
          <Grid item xs={12} sm={9} md={8} key="1">
            <TextField
              variant="outlined"
              placeholder="Add a Comment..."
              multiline
              rows={4}
              maxRows={4}
              className={classes.enterComment}
              value={comment}
              onChange={commentChange}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={3} key="2">
            <div className={classes.buttonDiv}>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={sendComment}
              >
                Send Comment
              </Button>
            </div>
          </Grid>
        </Grid>
        {painting.comments
          .map((comment) => (
            <Paper className={classes.paper}>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-center"
              >
                <Grid item xs={12} sm={9} md={9} key="1">
                  <h4>Anonymous User</h4>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key="2">
                  <p className={classes.commentDate}>
                    {comment[1].getHours() +
                      ":" +
                      comment[1].getSeconds() +
                      "  " +
                      monthNames[comment[1].getMonth()] +
                      " " +
                      comment[1].getDate() +
                      ", " +
                      comment[1].getFullYear()}
                  </p>
                </Grid>
              </Grid>
              <p className={classes.comment}>{comment[0]}</p>
            </Paper>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Painting;
