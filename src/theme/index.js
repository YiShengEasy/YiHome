import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';


// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
        }
    },
    card:{
        height:120
    }
});

export default theme;