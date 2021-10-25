import React from "react";
import * as yup from 'yup';
import { Formik } from 'formik';
import { DatePicker } from '@blueprintjs/datetime';
import { Grid } from "@material-ui/core";
import { Button, FormGroup, InputGroup, NumericInput, H2 } from '@blueprintjs/core';
import { CreateEditReservationContext } from '../context/CreateEditReservationContext';
import CardWithMargin from './CardWithMargin';

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
    <CardWithMargin>
      <Formik
        enableReinitialize
        validationSchema={
          yup.object().shape({
            name: yup.string().min(1).required('Name is required!'),
            numberOfGuests: yup.number().required('Number of guests is required!').min(1, "At least one guest is required!"),
            date: yup.date().min(new Date(Date.now())).required("Reservation date is required!"),
            email: yup.string().email('Must be a valid email!').notRequired(),
          })
        }
        initialValues={{
          id: reservation?.id,
          date: reservation?.date,
          name: reservation?.name,
          email: reservation?.email,
          numberOfGuests: reservation?.numberOfGuests,
        }}
        onSubmit={handleSubmit}
      >
        {({values, handleChange, resetForm, submitForm, errors, isValid, dirty, setFieldValue
        }) => (
          <Grid container direction="column" spacing={2} justify="center" alignItems="center">
            <Grid item>
              <H2>{values.id === undefined ? 'New' : 'Edit'} reservation</H2>
            </Grid>
            <Grid item>
              <FormGroup
                labelInfo="(required)"
                label="Name"
                helperText={errors.name}
                intent={!!errors.name ? 'danger' : undefined}
              >
                <InputGroup
                  value={values.name ?? ''} 
                  name="name"
                  id="name"
                  onChange={handleChange}
                  intent={!!errors.name ? 'danger' : undefined}
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormGroup
                labelInfo="(required)"
                label="Number of guests"
                helperText={errors.numberOfGuests}
                intent={!!errors.numberOfGuests ? 'danger' : undefined}
              >
                <NumericInput
                  value={values.numberOfGuests ?? ''} 
                  name="numberOfGuests"
                  id="numberOfGuests"
                  min={1}
                  onChange={handleChange}
                  intent={!!errors.numberOfGuests ? 'danger' : undefined}
                  onValueChange={(valueAsNumber) => setFieldValue('numberOfGuests', valueAsNumber, true)}
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormGroup
                labelInfo="(required)"
                label="Date of reservation"
                helperText={errors.date}
                intent={!!errors.date ? 'danger' : undefined}
              >
                <DatePicker
                  highlightCurrentDay
                  timePrecision="minute"
                  value={values.date ?? null}
                  minDate={new Date(Date.now())}
                  maxDate={new Date(2050, 12, 31)}
                  onChange={(selectedDate) => setFieldValue('date', selectedDate, true)}
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormGroup
                labelInfo="(optional)"
                label="Contact email"
                helperText={errors.email}
                intent={!!errors.email ? 'danger' : undefined}
              >
                <InputGroup
                  value={values.email ?? ''} 
                  name="email"
                  id="email"
                  onChange={handleChange}
                  intent={!!errors.email ? 'danger' : undefined}
                />
              </FormGroup>
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
    </CardWithMargin>
  );
};

export default CreateEditReservationComponent;
