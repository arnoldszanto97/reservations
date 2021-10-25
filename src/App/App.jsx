import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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
            <Grid container direction="row">
              <Grid item xs={4}><ReservationsContainer /></Grid>
              <Grid item xs={8}><NewReservationContainer /></Grid>
            </Grid>
          </CreateEditReservationProvider>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
