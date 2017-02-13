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

var socket = io.connect('http://localhost:5000')

export default class SplineGraph extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cType: props.cType,
            options: props.options,
            data: props.data,
            divN: props.divN
        };

        this.clicked = (ev) => socket.emit('start live', { my: 'data' },function (){})//console.log("button triggered")
        this.killed = (ev) => socket.emit('kill loop', { my: 'data' },function (){
            console.log("killing feed")
            socket.emit('killCon')
        })//console.log("button triggered")

    }

    componentWillMount(){
        google.charts.load('current',{'packages':['corechart']});
        console.log("Will mount")


    }


    componentDidMount(){
        google.charts.setOnLoadCallback(this.drawChart);
        console.log("Did mount, calling draw")
    }

    componentWillUnmount(){
        // clearChart() no method looks like react takes care of killing instance
        socket.emit('killCon', function (statusM){
            console.log("Attempted Unmount")
        })
        // console.log("splineGraph unmounted")

    };

    drawChart = () =>{
        console.log("in drawChartFunc")
        // var dataT = new google.visualization.DataTable(dataCon)
        // console.log(dataCon)
        // dataT.addColumn('datetime', 'Time');
        // dataT.addColumn('number', 'Temp');
        var divNu = this.state.divN
        var stateOpt = this.state.options
        socket.emit("get python", { my: 'data' }, function (returnJ){
            let dataT = new google.visualization.DataTable()
            dataT.addColumn('timeofday', 'Time');
            dataT.addColumn('number', 'Temp');
            var responseArray = JSON.parse(returnJ)
            dataT.addRows(responseArray)
            let chart = new google.visualization.AreaChart(document.getElementById(divNu));



            socket.on("message", function (dataRet){
                let holderArr = [JSON.parse(dataRet)]
                let lastIndex = dataT.getNumberOfRows()
                console.log
                // if (lastIndex > 65) {
                //     dataT.removeRow(dataT.getNumberOfRows());
                //     lastIndex = lastIndex -1;
                // }
                dataT.insertRows(lastIndex, holderArr)
                chart.draw(dataT, stateOpt);
            })
            chart.draw(dataT, stateOpt);
            // dataT.addRows([
            //     returnJ
            //     // (new Date(returnJ.timestamp)),
            //     // parseFloat(returnJ.temp),
            // ]);
        })
        // var chart = new google.visualization.AreaChart(document.getElementById(this.state.divN));
        // console.log("before draw")
        // chart.draw(dataT, this.state.options);
        // var wrapper = new google.visualization.ChartWrapper({
        //     chartType: this.state.cType,
        //     dataTable: this.state.data,
        //     options: this.state.options,
        //     containerId: this.state.divN
        // });
        // wrapper.draw();
        // var data = google.visualization.arrayToDataTable(this.state.data)
        // this.chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        // this.chart.draw(data, this.state.options);
    }

    render(){
        function clickThis() {
            console.log("button works")
        }

        socket.on('my response',function (data){
            console.log(data)
        })

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
                <RaisedButton label="Secondary" primary={true} style={style} onTouchTap={this.killed} />
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
