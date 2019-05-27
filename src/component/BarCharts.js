import React from 'react'
import Chart from 'chart.js'

class PieCharts extends React.Component {
    componentDidMount() {
        var ctx = this.refs.ChartBar.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                datasets: [{
                    data: [70, 20, 55, 30, 70, 35, 70, 30, 70, 10, 0, 10],
                    backgroundColor: [
                      '#5CC5C4',
                      '#6689D5',
                      '#5CC5C4',
                      '#6689D5',
                      '#5CC5C4',
                      '#6689D5',
                      '#5CC5C4',
                      '#6689D5',
                      '#5CC5C4',
                      '#6689D5',
                      '#5CC5C4',
                      '#6689D5'
                    ]
                }]
            },
            options: {
                legend: {
                    display: false,
                }
            }
        })
    }
    render() {
        return (
            <canvas ref="ChartBar"></canvas>
        )
    }
}
export default PieCharts