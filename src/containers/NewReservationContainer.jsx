import { connect } from "react-redux";
import NewReservationComponent from "../components/NewReservationComponent";
import { newReservation } from "../store/actionCreators";

// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = (dispatch) => ({
  createReservation: (reservation) => dispatch(newReservation(reservation)),
});

// https://react-redux.js.org/api/connect
export default connect(undefined, mapDispatchToProps)(NewReservationComponent);
