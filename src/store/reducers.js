import { newReservationType, receiveReservationsType } from "./actionCreators";

/*
  Reducers specify how the application's state changes in response to actions sent to the store. 
*/

const initialState = {
  list: [
    {
      id: 1,
      name: "John Smith",
      numberOfGuests: 4,
    },
    {
      id: 2,
      name: "Emily Parker",
      numberOfGuests: 2,
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
        list: newList,
      };
    }
    default:
      return state;
  }
};

export default reducer;
