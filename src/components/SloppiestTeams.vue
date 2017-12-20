<script>
// Sloppiest Teams Bar Chart
import { HorizontalBar } from 'vue-chartjs'
import map from 'lodash/map'
import GooglePalette from 'google-palette'
import JSONData from '../../static/data/sloppiest_teams.json'

export default {
  extends: HorizontalBar,
  mounted () {
    let chartData = JSONData
    let labels = map(chartData, (obj) => { return obj.Team_Name })
    let data = map(chartData, (obj) => { return obj.Average_Extras })
    let colors = GooglePalette('tol-rainbow', chartData.length)
    let renderOptions = {
      scales: {
        xAxes: [ {
          stacked: true,
          ticks: {
            stepSize: 10,
            min: 3
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
    let renderData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: map(colors, color => '#' + color),
          data: data
        }
      ]
    }
    // Overwriting base render method with actual data.
    this.renderChart(renderData, renderOptions)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
