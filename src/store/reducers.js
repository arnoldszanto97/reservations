import { newReservationType, receiveReservationsType, deleteReservationType, editReservationType } from "./actionCreators";

/*
  Reducers specify how the application's state changes in response to actions sent to the store. 
*/

const initialState = {
  list: [
    {
      id: 1,
      name: "John Smith",
      numberOfGuests: 4,
      email: 'john.smith@gmail.com',
      date: new Date('May 11, 2025 11:35:00'),
    },
    {
      id: 2,
      name: "Emily Parker",
      numberOfGuests: 2,
      email: 'emily.parker@gmail.com',
      date: new Date('October 15, 2025 10:45:00'),
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case receiveReservationsType: {
      return {
        ...state,
        list: action.reservations,
      };
    }
    case newReservationType: {
      const newList = [...state.list];
      newList.push(action.reservation);
      return {
        ...state,
        list: newList.map((reservation, index) => ({ ...reservation, id: index + 1 })),
      };
    }
    case deleteReservationType: {
      return {
        ...state,
        list: state.list.filter(function (reservation) { 
          return reservation.id !== action.id;
        }),
      };
    }
    case editReservationType: {
      return {
        ...state,
        list: state.list.map(function (reservation) { 
          if (reservation.id === action.id){
            return action.reservation;
          }
          return reservation;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
