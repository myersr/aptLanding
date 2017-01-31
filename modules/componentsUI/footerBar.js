/**
 * Created by roy on 12/26/16.
 */
import React from 'react';
// import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
//
// import FontIcon from 'material-ui/FontIcon';
// import SvgIconFace from 'material-ui/svg-icons/action/face';
// import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
    chip: {
        // margin: 4,
        //align: 'center'
        flex: "center",
        justifyContent: "center"
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

function handleTouchTap() {
    alert('You clicked the Chip.');
}

var style = {
    flexBasis: 'auto',
    backgroundColor: "#455A64",
    borderTop: "1px solid #263238",
    textAlign: "center",
    height: "auto",
};
var styleTest = {
    backgroundColor: "#455A64",
    borderTop: "1px solid #263238",
    display: 'flex',
    flexWrap: 'wrap',

}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '40px',
    width: '100%',
}

const FooterBar = React.createClass({
    render: function() {
        return (
            <Paper zDepth={3} style={style}>
                {/*<div style={phantom} />*/}
                <div style={styleTest}>
                    <Chip style={styles.chip} onTouchTap={handleTouchTap} >Powered by <em>Material-UI</em></Chip>
                    <Chip style={styles.chip} onTouchTap={handleTouchTap} >Check me out on Github</Chip>
                </div>
            </Paper>
        );
    }
});

export default FooterBar;