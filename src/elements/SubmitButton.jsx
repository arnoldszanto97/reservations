import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";

// Styling with material-ui hook API: https://material-ui.com/styles/basics/
const useStyles = makeStyles(() =>
  createStyles({
    button: {
      background: 'yellow'
    },
  })
);

const SubmitButton = (props) => {
  const classes = useStyles();
  return (
    <Button type="submit" disabled={props.disabled} className={classes.button}>Submit</Button>
  );
};

export default SubmitButton;
