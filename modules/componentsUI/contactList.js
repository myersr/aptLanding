/**
 * Created by roy on 12/25/16.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

//item for class instance
import {brown500} from 'material-ui/styles/colors';
import Clipboard from 'clipboard'
import GoClippy from 'react-icons/lib/go/clippy';
import GoMail from 'react-icons/lib/go/mail';
import GoCheck from 'react-icons/lib/go/check';
import MdContactPhone from 'react-icons/lib/md/contact-phone';
import MdPictureAsPdf from 'react-icons/lib/md/picture-as-pdf';

//testing instance of whole EmailList item
import EmailItem from './EmailItem'


import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

const style = {

    paper: {
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
    },
    link: {
        textDecoration: 'none'
    },
    linkedIn: {
        color: '#0077B5'
    }
};

var clipboard = new Clipboard('#clip');
clipboard.on('success', (e) => {
    console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    // this.setState({
    //     leftIcon: <GoCheck color={indigo500} />
    // })
    e.clearSelection();
});

clipboard.on('error', (e) => {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});


class IconChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clippy: <GoClippy color={brown500} />
        };
        this.switchIcon = this.switchIcon.bind(this)
    }

    switchIcon() {
        this.setState(prevState => ({
            clippy: <span><GoCheck color={brown500} /> copied!</span>
        }));
    }


    render = () => {
        return (
            <div onClick={this.switchIcon}>
                {/*<GoClippy color={brown500} />*/}
                {this.state.clippy}
            </div>
        )
    }
}

const ContactList = () => (
    <div>
        <Paper style={style.paper} zDepth={3}>
            <List>
                <Subheader>Contact Me</Subheader>
                <Divider inset={false} />
                <a style={style.link} href="https://www.linkedin.com/in/roy-lee-myers-iii-569163109">
                    <ListItem
                        primaryText="Roy Myers"
                        secondaryText="Columbia, SC"
                        leftAvatar={<Avatar src="/static/img/headshotAvi.jpg" />}
                        rightIcon={<FaLinkedinSquare style={style.linkedIn} />}
                    />
                </a>
                <Divider inset={true} />

                <EmailItem emailText={'roymyers@protonmail.com'} secondaryText={'Primary'} />
                <EmailItem emailText={'myersr@gmail.com'} secondaryText={'Secondary'} />

                <Divider inset={true} />
                <a style={style.link} href="tel:864-616-0859">
                    <ListItem
                        leftIcon={<MdContactPhone color={brown500} />}
                        primaryText="(864) 616 - 0859"
                        secondaryText="Mobile">
                    </ListItem>
                </a>
                <Divider inset={true} />
                <a href="https://tinyrick.me/docs/resumeRoyMyers2017.pdf">
                    <ListItem
                        leftIcon={<MdPictureAsPdf color={brown500} />}
                        primaryText="Resume">
                    </ListItem>
                </a>
            </List>
        </Paper>
    </div>
);

export default ContactList;
