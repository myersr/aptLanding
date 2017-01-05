import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {blueGrey500, blueGrey700, pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import FaAlignJustify from 'react-icons/lib/fa/align-justify';

export default class DrawerDck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            width: 10,
            zDepth: 5,
            style: {
                backgroundColor: blueGrey500
                // palette: {
                //     primary1Color: blueGrey500,
                //     primary2Color: blueGrey700,
                //     primary3Color: grey400,
                //     accent1Color: pinkA200,
                //     accent2Color: grey100,
                //     accent3Color: grey500,
                //     textColor: darkBlack,
                //     alternateTextColor: white,
                //     canvasColor: white,
                //     borderColor: grey300,
                //     // disabledColor: fade(darkBlack, 0.3),
                //     pickerHeaderColor: blueGrey500,
                //     // clockCircleColor: fade(darkBlack, 0.07),
                //     shadowColor: fullBlack,
                // }
            }
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <IconButton tooltip="Menu" onTouchTap={this.handleToggle} ><NavigationMenu color="white" /></IconButton>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}