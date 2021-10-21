import React from "react";
import "./ReservationsComponent.css";

const ReservationsComponent = (props) => {
  const { reservations } = props;

  return (
    <div className="reservationContainer">
      Reservations:
      {reservations.map((reservation, index) => (
        <div className="reservation" key={index}>
          <p>Name: {reservation.name}</p>
          <p>Guests: {reservation.numberOfGuests}</p>
        </div>
      ))}
    </div>
  );
};

export default ReservationsComponent;
