/**
 * Created by roy on 12/26/16.
 */
import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
    chip: {
        // margin: 4,
        align: 'center'
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
    backgroundColor: "#455A64",
    borderTop: "1px solid #263238",
    textAlign: "center",
    bottom: "0",
    height: "auto",
    // width: "100%",
};

var phantom = {
    display: 'block',
    padding: '20px',
    height: '40px',
    // width: '100%',
}

const FooterBar = React.createClass({
    render: function() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                    <Chip style={styles.chip} onTouchTap={handleTouchTap} > Powered by <em>Material-UI</em></Chip>
                    <Chip style={styles.chip} onTouchTap={handleTouchTap} > Check me out on Github</Chip>
                </div>
            </div>
        );
    }
});

export default FooterBar;