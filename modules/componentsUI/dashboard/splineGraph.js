/**
 * Created by roy on 1/17/17.
 */
import React from 'react'
// import CanvasJS from 'canvasjs';
import {Chart} from 'react-google-charts';


const styles = {

}

export default class SplineGraph extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            options:{
                title: 'Age vs. Weight comparison',
                hAxis: {title: 'Age', minValue: 0, maxValue: 15},
                vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
                legend: 'none'
            },
            data:[
                ['Age', 'Weight'],
                [ 8,      12],
                [ 4,      5.5],
                [ 11,     14],
                [ 4,      5],
                [ 3,      3.5],
                [ 6.5,    7]
            ]
        };

    }


    componentDidMount(){

    }

    componentWillUnmount = () => {

    };


    render = () =>{

        return (
            <div>
                <Chart
                    chartType="ScatterChart"
                    data={this.state.data}
                    options={this.state.options}
                    graph_id="ScatterChart"
                    width="100%"
                    height="400px"
                    legend_toggle
                />
            </div>
        )
    }
    ///... or jsx "spread" is for multiple arguments, elements, or variables
}


// var TimerMixin = require('react-timer-mixin');
//
// componentDidMount: function() {
//     this.setInterval( () => {
//         let d = new Date();
//         let result = d.getHours() + d.getMinutes() / MINUTES_IN_HOUR;
//         this.setState({
//             timeLineTop: result
//         })
//     }, 500);
// }
