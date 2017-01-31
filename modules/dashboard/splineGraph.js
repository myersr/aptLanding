/**
 * Created by roy on 1/17/17.
 */
import React from 'react'
import {makeRequest} from 'utils'



const styles = {
    display: "flex",
}

export default class SplineGraph extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cType: props.cType,
            options: props.options,
            data: props.data,
            divN: props.divN
        };

    }

    componentWillMount(){
        google.charts.load('current');
        console.log("Will mount")

    }

    componentDidMount(){
        google.charts.setOnLoadCallback(this.drawChart);
        console.log("Did mount")

    }

    componentWillUnmount(){
        // clearChart() no method looks like react takes care of killing instance
        console.log("splineGraph unmounted")


    };

    drawChart = () =>{
        var wrapper = new google.visualization.ChartWrapper({
            chartType: this.state.cType,
            dataTable: this.state.data,
            options: this.state.options,
            containerId: this.state.divN
        });
        wrapper.draw();
        // var data = google.visualization.arrayToDataTable(this.state.data)
        // this.chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        // this.chart.draw(data, this.state.options);
    }

    render = () =>{

        return (
            <div>
                <div id={this.state.divN} style={styles}></div>
                {/*<Chart
                    chartType="ScatterChart"
                    data={this.state.data}
                    options={this.state.options}
                    graph_id="ScatterChart"
                    width="100%"
                    height="400px"
                    legend_toggle
                />*/}
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
