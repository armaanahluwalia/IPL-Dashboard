<script>
// Stadium Scores Bar Chart
import { HorizontalBar } from 'vue-chartjs'
import map from 'lodash/map'
import GooglePalette from 'google-palette'
import JSONData from '../../static/data/stadium_runs.json'

export default {
  extends: HorizontalBar,
  mounted () {
    let chartData = JSONData
    let labels = map(chartData, (obj) => { return obj.Stadium_Name })
    let data = map(chartData, (obj) => { return obj.Average })
    let renderData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: map(GooglePalette('tol-rainbow', chartData.length), color => '#' + color),
          data: data
        }
      ]
    }
    let renderOptions = {
      scales: {
        xAxes: [ {
          ticks: {
            min: 230
          },
          categoryPercentage: 0.9,
          barPercentage: 1
        }]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    }
    // Overwriting base render method with actual data.
    this.renderChart(renderData, renderOptions)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
