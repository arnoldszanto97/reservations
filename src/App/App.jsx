import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from "react";
import { Provider } from "react-redux";
import { NewReservationContainer, ReservationsContainer } from "../containers";
import { CreateEditReservationProvider } from "../context/CreateEditReservationContext";
import store from '../store/store';
import "./App.css";
import theme from './theme';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <CreateEditReservationProvider>
            <ReservationsContainer />
            <NewReservationContainer />
          </CreateEditReservationProvider>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
