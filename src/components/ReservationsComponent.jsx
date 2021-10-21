import React from "react";
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';
import "./ReservationsComponent.css";

const ReservationsComponent = (props) => {
  const { reservations, deleteReservation } = props;
  const { reservation, setReservation, resetReservation } = React.useContext(CreateEditReservationContext);

  return (
    <div className="reservationContainer">
      Reservations:
      {reservations.map((reservation, index) => (
        <div className="reservation" key={index}>
          <p>Name: {reservation.name}</p>
          <p>Guests: {reservation.numberOfGuests}</p>
          <button onClick={() => deleteReservation(reservation.id)}>Delete</button>
          <button onClick={() => setReservation(reservation)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default ReservationsComponent;
