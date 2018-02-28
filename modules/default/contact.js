/**
 * Created by roy on 2/28/17.
 */
import React from 'react'
import ContactList from 'componentsUI/objects/contactList';
import ReactDOM from 'react-dom'


class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            options:{
                title: 'Temps',
                legend: 'none',
                hAxis: {title: 'Time: hour:min:sec'},
                vAxis: {title: 'Temperature of CPU', minValue: 40, maxValue: 80},
                width:600,
                height:500,
                animation: {
                    duration: 200,
                    easing: 'in'
                }
            },
            data:[
                ['time', 'Temp'],
                [ 3,      3.5],
                [ 4,      5],
                [ 4,      5.5],
                [ 6.5,    7],
                [ 8,      12],
                [ 11,     14]
            ]
        };

    }

    render() {
        return (
            <div>
                <div>
                    <ContactList/>
                </div>
            </div>
        )
    }
}
export default Contact;

