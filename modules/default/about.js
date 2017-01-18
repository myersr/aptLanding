/**
 * Created by roy on 12/13/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import FusionCharts from 'fusioncharts'
import charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'

charts(FusionCharts)
FusionCharts.ready(function (){
    var myDataSource = {
            chart: {
                caption: 'Harry\'s SuperMart',
                subCaption: 'Top 5 stores in last month by revenue',
                numberPrefix: '$',
                theme: 'graphite'
            },
            data: [
                {
                    label: 'Bakersfield Central',
                    value: '880000'
                },
                {
                    label: 'Garden Groove harbour',
                    value: '730000'
                },
                {
                    label: 'Los Angeles Topanga',
                    value: '590000'
                },
                {
                    label: 'Compton-Rancho Dom',
                    value: '520000'
                },
                {
                    label: 'Daly City Serramonte',
                    value: '330000'
                }
            ]
        },

        revenueChartConfigs = {
            id: 'revenue-chart',
            type: 'column2d',
            width: 300,
            height: 300,
            dataFormat: 'json',
            dataSource: myDataSource
        };
    ReactDOM.render(<ReactFC {...revenueChartConfigs} />,
        document.getElementById('chart-container')
    );
})

export default React.createClass({
    render() {
        return (
            <div>
                <p>Tutorial Header</p>
                <div id="chart-container"></div>
                <div></div>
            </div>
        )
    }
})
