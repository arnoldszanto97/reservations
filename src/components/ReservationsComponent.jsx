import React from "react";
import { Button } from "@blueprintjs/core";
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';
import "./ReservationsComponent.css";

const ReservationDisplay = (props) => {
  const { reservation, deleteReservation } = props;
  const { setReservation } = React.useContext(CreateEditReservationContext);

  return (
    <div className="reservation" key={reservation.id}>
      <p>ID: {reservation.id}</p>
      <p>Name: {reservation.name}</p>
      <p>Guests: {reservation.numberOfGuests}</p>
      <p>Date: {reservation.date.toString()}</p>
      <p>Contact email: {reservation.email ?? '<none>'}</p>
      <Button intent="danger" onClick={() => deleteReservation(reservation.id)} text="Delete" />
      <Button intent="warning" onClick={() => setReservation(reservation)} text="Edit" />
    </div>
  )
}

const ReservationsComponent = (props) => {
  const { reservations, deleteReservation } = props;

  return (
    <div className="reservationContainer">
      Reservations:
      {reservations.map((reservation) => (
        <ReservationDisplay key={reservation.id} reservation={reservation} deleteReservation={deleteReservation} />
      ))}
    </div>
  );
};

export default ReservationsComponent;
