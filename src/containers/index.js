/* 
    Containers are "smart" React components, that are connected to the redux store.
    They are concerned with how things work, not how they look.
    They contain the more "complex logic" of the application, and usually no DOM markup.
    They get the necessary application state (data, and functions that change the data via action dispatches) from the props and pass down as props to other components.
    The lines between containers and components are sometimes blurry. More info at https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
*/

export { default as NewReservationContainer } from './NewReservationContainer';
export { default as ReservationsContainer } from './ReservationsContainer';
