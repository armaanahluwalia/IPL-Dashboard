<script>
// Top Fielders Bubble Chart
import { Bubble } from 'vue-chartjs'
import map from 'lodash/map'
import cloneDeep from 'lodash/cloneDeep'
import GooglePalette from 'google-palette'
import JSONData from '../../static/data/best_fielders.json'

export default {
  extends: Bubble,
  mounted () {
    let rawChartData = JSONData
    let colors = GooglePalette('tol-rainbow', rawChartData.length)
    var chartData = map(rawChartData, (obj, ind) => {
      let stats = JSON.parse(obj.Data)
      return {
        label: obj.Player_Name,
        backgroundColor: '#' + colors[ind],
        data: [{
          x: stats[0],
          y: stats[1],
          r: stats[2]
        }]
      }
    })
    let renderData = {
      labels: ['Caught', 'Run-Out', 'Total'],
      datasets: cloneDeep(chartData)
    }
    let renderOptions = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          label: (obj) => {
            var playerData = chartData[obj.datasetIndex].data
            return 'Caught: ' + playerData[0].x +
              ', Run-Out: ' + playerData[0].y +
              ', Total: ' + playerData[0].r
          }
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 35,
            max: 80
          },
          scaleLabel: {
            display: true,
            labelString: 'Caught'
          }
        }],
        yAxes: [{
          ticks: {
            max: 16
          },
          scaleLabel: {
            display: true,
            labelString: 'Run-Out'
          }
        }]
      }
    }
    // Overwriting base render method with actual data.
    this.renderChart(renderData, renderOptions)
  }
}
</script>
