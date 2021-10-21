import React from "react";
import { connect } from "react-redux";
import ReservationsComponent from "../components/ReservationsComponent";
import { deleteReservation } from "../store/actionCreators";

const ReservationsContainer = (props) => {
  return <ReservationsComponent {...props} />;
};

// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = (state) => {
  return {
    reservations: state.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteReservation: (reservation) => dispatch(deleteReservation(reservation)),
});

// https://react-redux.js.org/api/connect
export default connect(mapStateToProps, mapDispatchToProps)(ReservationsContainer);
