/* 
    Components are "dumb" React components, that are usually NOT connected to the redux store.
    They are concerned with how things look, not how they work.
    They get the necessary props from parents and display them with various graphical elements, use the callbacks from props to notify parents when things change.
    The lines between containers and components are sometimes blurry. More info at https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
*/

export { default as NewReservationComponent } from './NewReservationComponent';
export { default as ReservationComponent } from './ReservationComponent';

