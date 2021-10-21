import { FormControl, FormHelperText, Grid, Input, InputLabel, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { SubmitButton } from '../elements';

const NewReservationComponent = (props) => {
  const [name, setName] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const submitDisabled = !name || !numberOfGuests;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createReservation({ name, numberOfGuests });
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={1} justify="center" alignItems="center">
        <Grid item>
          <Typography>New reservation:</Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel required>
              Name
            </InputLabel>
            <Input id="name" onChange={(event) => setName(event.target.value)} />
            <FormHelperText id="name-text">
              We'll never share your name.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel required>
              Number of guests
            </InputLabel>
            <Input id="numberOfGuests" onChange={(event) => setNumberOfGuests(event.target.value)} />
          </FormControl>
        </Grid>
        <Grid item>
          <SubmitButton type="submit" disabled={submitDisabled} />
        </Grid>
      </Grid>
    </form>
  );
};

export default NewReservationComponent;
