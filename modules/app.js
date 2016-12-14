import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default React.createClass({
    render() {
        return (
            <MuiThemeProvider>
                <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
})