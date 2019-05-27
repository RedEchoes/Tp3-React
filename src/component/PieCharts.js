import React from 'react'
import Chart from 'chart.js'

class PieCharts extends React.Component {
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((result) => {
                var complete = 0
                var notComplete = 0
                for (let i = 0; i < result.length; i++) {
                    if (result[i].completed === false) {
                        complete += 1
                    } else {
                        notComplete += 1
                    }
                }
                var ctx = this.refs.ChartBar.getContext('2d')
                var chart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: [
                            'complété', 'Non-complété'
                        ],
                        datasets: [
                            {
                                data: [
                                    complete, notComplete
                                ],
                                backgroundColor: [
                                    '#5CC5C4',
                                    '#6689D5'
                                ],
                                borderWidth: 0
                            }
                        ]
                    }
                })
                this.setState({isLoaded: true, items: result});
            }, (error) => {
                this.setState({isLoaded: true, error});
            })

    }
    render() {
        return (
            <canvas ref="ChartBar"></canvas>
        )
    }
}

export default PieCharts