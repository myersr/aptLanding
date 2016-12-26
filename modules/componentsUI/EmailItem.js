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


import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';


export default class EmailItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            clippy: <GoClippy size={10} color={brown500}/>,
            emailT: props.emailText,
            secondaryT: props.secondaryText
        };
        // this.switchIcon = this.switchIcon.bind(this)
    }

    componentDidMount(){
        this.clipboard = new Clipboard(this.refs.copyButton);

        this.clipboard.on('success', (e) =>{
            this.setState(prevState => ({
                clippy: <GoCheck size={15} color={brown500} />
            }));

            e.clearSelection();
        })

        this.clipboard.on('error', (e) =>{
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        })
    }

    componentWillUnmount = () => {
        console.log('destroyed Clippy')
        // You should destroy your clipboard and remove the listener
        // when the component unmounts to prevent memory leaks
        this.clipboard.destroy();
        // or whatever the comparable method is for clipboard.js
    };



    // switchIcon(){
    //     this.setState(prevState => ({
    //         clippy: <GoCheck color={brown500}/>
    //     }));
    // }


    render = () =>{
        return (
            <div ref="copyButton" data-clipboard-text={this.state.emailT}>
                <ListItem
                    ref="copyButton"
                    data-clipboard-text='testing'
                    leftIcon={this.state.clippy}
                    primaryText={this.state.emailT}
                    secondaryText={this.state.secondaryT}
                    rightIcon={<a href="mailto:{this.state.emailT}"><GoMail size={24} color={brown500}/></a>}
                />
            </div>

        )


    }
}