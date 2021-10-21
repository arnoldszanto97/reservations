import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/* Creating material-ui theme with primary, secondary and error color overrides.
    * https://material-ui.com/styles/basics/
    * https://material-ui.com/customization/palette/
    * View all available theme properties at: https://material-ui.com/customization/default-theme/
*/
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
        main: '#8AB660'
    },
  },
  error: {
    main: pink
  }
});

export default theme;