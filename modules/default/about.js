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
                title: 'Age vs. Weight comparison',
                hAxis: {title: 'Age', minValue: 0, maxValue: 15},
                vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
                legend: 'none',
                width:400,
                height:300
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
                <p>Tutorial Header</p>
                <SplineGraph options={this.state.options} data={this.state.data} divN="chart_div" cType="AreaChart"/>
                <div></div>
            </div>
        )
    }
}
export default About;
