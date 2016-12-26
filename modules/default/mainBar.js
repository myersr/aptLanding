/**
 * Created by roy on 12/23/16.
 */
import React from 'react';
import {blueGrey500, blueGrey700, pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import GoMarkGithub from 'react-icons/lib/go/mark-github';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiThemeC = getMuiTheme({
    // spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        // disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blueGrey500,
        // clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    },
});

const styles = {
    button: {
        margin: 12,
    }
};


// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
    <MuiThemeProvider muiTheme={muiThemeC}>
        <AppBar title="Lofts 401" zDepth={2}  iconElementRight={<a href="https://github.com/myersr"><GoMarkGithub style={styles.button} color="white" size={24} /></a>} />
    </MuiThemeProvider>
);

export default Main;