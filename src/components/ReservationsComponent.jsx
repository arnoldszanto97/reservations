import React from "react";
import { Button, Elevation, H2 } from "@blueprintjs/core";
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';
import { Grid } from '@material-ui/core';
import CardWithMargin from './CardWithMargin';

const ReservationDisplay = (props) => {
  const { reservation, deleteReservation } = props;
  const { setReservation } = React.useContext(CreateEditReservationContext);

  return (
    <CardWithMargin elevation={Elevation.TWO}>
      <p><strong>ID:</strong> {reservation.id}</p>
      <p><strong>Name:</strong> {reservation.name}</p>
      <p><strong>Guests:</strong> {reservation.numberOfGuests}</p>
      <p><strong>Date:</strong> {reservation.date.toString()}</p>
      <p><strong>Contact email:</strong> {reservation.email ?? '<none>'}</p>
      <Grid container spacing={2} justify="center" alignContent="center">
        <Grid item>
          <Button intent="danger" onClick={() => deleteReservation(reservation.id)} text="Delete" />
        </Grid>
        <Grid item>
          <Button intent="warning" onClick={() => setReservation(reservation)} text="Edit" />
        </Grid>
      </Grid>
    </CardWithMargin>
  )
}

const ReservationsComponent = (props) => {
  const { reservations, deleteReservation } = props;

  return (
    <div style={{ margin: '20px' }}>
      <Grid container spacing={1}>
        <H2>Reservations</H2>
        {reservations.map((reservation) => (
          <Grid item key={reservation.id}>
            <ReservationDisplay reservation={reservation} deleteReservation={deleteReservation} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReservationsComponent;
