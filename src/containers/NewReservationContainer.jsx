import { connect } from "react-redux";
import CreateEditReservationComponent from "../components/CreateEditReservationComponent";
import { newReservation, editReservation } from "../store/actionCreators";

// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = (dispatch) => ({
  editReservation: (id, reservation) => dispatch(editReservation(id, reservation)),
  createReservation: (reservation) => dispatch(newReservation(reservation)),
});

// https://react-redux.js.org/api/connect
export default connect(undefined, mapDispatchToProps)(CreateEditReservationComponent);
