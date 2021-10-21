import { FormControl, FormHelperText, Grid, Input, InputLabel, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';
import { SubmitButton } from '../elements';

const CreateEditReservationComponent = (props) => {
  const { reservation, setReservation, resetReservation } = React.useContext(CreateEditReservationContext);
  const mode = React.useMemo(() => reservation.id === undefined ? 'create' : 'edit', [reservation])
  const [name, setName] = useState(reservation ? reservation.reservationName : undefined);
  const [numberOfGuests, setNumberOfGuests] = useState(reservation ? reservation.numberOfGuests : undefined);
  const submitDisabled = !name || !numberOfGuests;

  React.useEffect(() => {
    setReservation((state) => ({
      ...state,
      numberOfGuests,
      reservationName: name,
    }));
  }, [name, numberOfGuests, setReservation]);

  React.useEffect(() => {
    if (reservation && reservation.reservationName !== name) {
      setName(reservation.reservationName);
    }
    if (reservation && reservation.numberOfGuests !== numberOfGuests) {
      setNumberOfGuests(reservation.numberOfGuests);
    }
  }, [reservation]);

  React.useEffect(() => {
    console.log(reservation)
  }, [reservation]);

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
    if (reservation && reservation.id) {
      props.editReservation(reservation.id, { name, numberOfGuests });
    } else {
      props.createReservation({ name, numberOfGuests });
    }
    resetReservation();
  }, [name, numberOfGuests, props, reservation, resetReservation]);

  const reset = React.useCallback(() => {
    setName(undefined);
    setNumberOfGuests(undefined);
    resetReservation();
  }, [resetReservation]);

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={1} justify="center" alignItems="center">
        <Grid item>
          <Typography>{mode === 'create' ? 'New' : 'Edit'} reservation:</Typography>
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
          <Grid container>
            <Grid item>
            <SubmitButton type="submit" disabled={submitDisabled} />
            </Grid>
            <Grid item>
              <button onClick={reset}>Reset form</button>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateEditReservationComponent;
