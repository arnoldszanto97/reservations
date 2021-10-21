export const receiveReservationsType = "RECEIVE_RESERVATIONS";

/*
    Redux actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed.

    Action creators are functions that make sure that actions are constructed properly:
        * they have type property set
        * other payload properties are set if they are required
*/

export function receiveReservations(reservations) {
  return {
    type: receiveReservationsType,
    reservations,
  };
}

export const newReservationType = "NEW_RESERVATION";

export function newReservation(reservation) {
  return {
    type: newReservationType,
    reservation,
  };
}

export const deleteReservationType = "DELETE_RESERVATION";

export function deleteReservation(id) {
  return {
    type: deleteReservationType,
    id,
  }
}

export const editReservationType = "EDIT_RESERVATION";

export function editReservation(id, reservation) {
  return {
    type: editReservationType,
    reservation,
    id,
  }
}