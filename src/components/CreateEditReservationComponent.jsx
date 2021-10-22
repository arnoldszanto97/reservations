import React from "react";
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button } from '@blueprintjs/core';
import { Grid, Typography, TextField } from "@material-ui/core";
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';

const CreateEditReservationComponent = (props) => {
  const { editReservation, createReservation } = props;
  const { reservation, resetReservation } = React.useContext(CreateEditReservationContext);

  const handleSubmit = React.useCallback((values, formikHelpers) => {
    if (values.id === undefined) {
      // CREATE
      createReservation(values);
      resetReservation();
      formikHelpers.resetForm();
      return;
    }
    // EDIT
    editReservation(values.id, values);
    resetReservation();
    formikHelpers.resetForm();
  }, [createReservation, editReservation, resetReservation]);

  return (
    <Formik
      enableReinitialize
      validationSchema={
        yup.object().shape({
          name: yup.string().required('Name is required!'),
          numberOfGuests: yup.number().required('Number of guests is required!').min(1, "At least one guest is required!"),
        })
      }
      initialValues={{
        id: reservation?.id,
        name: reservation?.name,
        numberOfGuests: reservation?.numberOfGuests,
      }}
      onSubmit={handleSubmit}
    >
      {({values, handleChange, resetForm, submitForm, touched, errors, isValid, dirty }) => (
        <Grid container direction="column" spacing={2} justify="center" alignItems="center">
          <Grid item>
            <Typography>{values.id === undefined ? 'New' : 'Edit'} reservation:</Typography>
          </Grid>
          <Grid item>
            <TextField
              value={values.name || ''} 
              name="name"
              id="name"
              label="Name"
              onChange={handleChange}
              error={touched.name && !! errors.name}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item>
            <TextField
              type="number"
              value={values.numberOfGuests || ''} 
              name="numberOfGuests"
              id="numberOfGuests"
              onChange={handleChange}
              label="Number of guests"
              error={touched.numberOfGuests && !! errors.numberOfGuests}
              helperText={touched.numberOfGuests && errors.numberOfGuests}
            />
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
              <Button
                intent={values.id  === undefined ? 'primary' : 'warning'}
                type="submit"
                disabled={!isValid || !dirty}
                onClick={() => submitForm()}
                text={values.id  === undefined ? 'New' : 'Edit'}
              />
              </Grid>
              <Grid item>
                <Button onClick={() => {
                  resetReservation();
                  resetForm();
                }}>Reset form</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default CreateEditReservationComponent;
