import React from "react";
import { connect } from "react-redux";
import ReservationsComponent from "../components/ReservationsComponent";

const ReservationsContainer = (props) => {
  return <ReservationsComponent {...props} />;
};

// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = (state) => {
  return {
    reservations: state.list,
  };
};

// https://react-redux.js.org/api/connect
export default connect(mapStateToProps, {})(ReservationsContainer);
