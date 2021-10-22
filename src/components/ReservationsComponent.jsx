import React from "react";
import { Button } from "@blueprintjs/core";
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';
import "./ReservationsComponent.css";

const ReservationsComponent = (props) => {
  const { reservations, deleteReservation } = props;
  const { setReservation } = React.useContext(CreateEditReservationContext);

  return (
    <div className="reservationContainer">
      Reservations:
      {reservations.map((reservation, index) => (
        <div className="reservation" key={index}>
          <p>Name: {reservation.name}</p>
          <p>Guests: {reservation.numberOfGuests}</p>
          <Button intent="danger" onClick={() => deleteReservation(reservation.id)} text="Delete" />
          <Button intent="warning" onClick={() => setReservation(reservation)} text="Edit" />
        </div>
      ))}
    </div>
  );
};

export default ReservationsComponent;
