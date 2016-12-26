/**
 * Created by roy on 12/24/16.
 */
var React = require('react');
var Sidebar = require('react-sidebar');


var sideBar = React.createClass({
    getInitialState() {
        return {sidebarOpen: true, sidebarDocked: true};
    },

    onSetSidebarOpen: function(open) {
        this.setState({sidebarOpen: open});
    },

    componentWillMount: function() {
        var mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, sidebarDocked: mql.matches});
    },

    componentWillUnmount: function() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    },

    mediaQueryChanged: function() {
        this.setState({sidebarDocked: this.state.mql.matches});
    },

    onSetOpen(open) {
        this.setState({open: open});
    },

    toggleOpen(ev) {
        this.setState({open: !this.state.open});

        if (ev) {
            ev.preventDefault();
        }
    },

    render: function() {
        var sidebarContent = <b>Sidebar content</b>;

        return (
            <Sidebar sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     docked={this.state.sidebarDocked}
                     onSetOpen={this.onSetSidebarOpen}>
                <b>Main content</b>
            </Sidebar>
        );
    }
});

module.exports = sideBar;