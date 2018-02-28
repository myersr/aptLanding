/**
 * Created by roy on 12/13/16.
 */
import React from 'react'
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MeCard from 'componentsUI/meCard';
// import ContactList from 'componentsUI/contactList';

const stylez = {
    margin: 2,
};

export default React.createClass({
    render() {
        return(
            <div>
                <MeCard/>
                <FloatingActionButton href="https://github.com/myersr">
                    <GoMarkGithub size={30} />
                </FloatingActionButton>
            </div>
        )

    }
})