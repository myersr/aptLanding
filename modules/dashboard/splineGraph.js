/**
 * Created by roy on 1/17/17.
 */
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {onTouchTap} from 'react-tap-event-plugin'
import {makeRequest} from 'utils'
import io from 'socket.io-client'

const style = {
    margin: 12,
};

const styles = {
    buttonResponse: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    divI: {
        display: "flex"
    }
}

let socket = io.connect('http://localhost:5000')

export default class SplineGraph extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cType: props.cType,
            options: props.options,
            data: props.data,
            divN: props.divN
        };
        this.clicked = (ev) => socket.emit('my event',function (){console.log("hit my event")})//console.log("button triggered")

    }

    // _initialize(data){
    //     console.log(data)
    //     // setState({
    //     // })
    // }

    componentWillMount(){
        google.charts.load('current');
        console.log("Will mount")

    }

    componentDidMount(){
        socket.on('connect', function(){
            console.log("connected")
            console.log(socket.id); // 'G5p5...'
        });

        socket.on('my response',function (data){
            console.log(data)
        })
        // socket.on('connect', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!
        //
        // });
        // socket.on('from python', function (data){
        //     console.log('inside event')
        //     console.log(data)
        // })

        // socket.on('disconnect', function(){
        //     console.log("connected")
        //     console.log(socket.id); // 'G5p5...'
        // });


        // this.socket.on('from python', function (data){
        //     console.log('inside event')
        //     console.log(data)
        // })

        //socket.on('send:message', this._dataRecieve);
        //socket.on('user:join', this._userJoined);
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

    render(){
        function clickThis() {
            console.log("button works")
        }

        return (
            <div>
                <div id={this.state.divN} style={styles.divI}></div>
                {/*<Chart
                 chartType="ScatterChart"
                 data={this.state.data}
                 options={this.state.options}
                 graph_id="ScatterChart"
                 width="100%"
                 height="400px"
                 legend_toggle
                 whenClicked={(event) => this.handleClick(event)}
                 onClick={() => this.props.whenClicked() }
                 />*/}
                <RaisedButton label="Primary" primary={true} style={style} onTouchTap={this.clicked} />
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
