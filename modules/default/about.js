/**
 * Created by roy on 12/13/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import SplineGraph from 'dashboard/splineGraph'


class About extends React.Component{

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
                <SplineGraph options={this.state.options} data={this.state.data} divN="chart_div" cType="AreaChart"/>
                <div></div>
            </div>
        )
    }
}
export default About;
