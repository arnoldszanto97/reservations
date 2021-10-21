import React from 'react';

const initialReservation = {
  id: undefined,
  reservationName: undefined,
  numberOfGuests: undefined,
};

export const CreateEditReservationContext = React.createContext(undefined);


export const CreateEditReservationProvider = function(props){
  const [reservation, setReservation] = React.useState(initialReservation);

  const resetReservation = React.useCallback(() => setReservation(initialReservation), []);

  return (
    <CreateEditReservationContext.Provider value={{ reservation, setReservation, resetReservation }}>
      {props.children}
    </CreateEditReservationContext.Provider>
  )
}
