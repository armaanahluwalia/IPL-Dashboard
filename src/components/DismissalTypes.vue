<script>
// Dismissal Types Doughnut Chart
import { Doughnut } from 'vue-chartjs'
import map from 'lodash/map'
import GooglePalette from 'google-palette'
import JSONData from '../../static/data/dismissal_types.json'

export default {
  extends: Doughnut,
  mounted () {
    let chartData = JSONData
    let labels = map(chartData, (obj) => { return obj.Dismissal_Type })
    let data = map(chartData, (obj) => { return obj.Count })
    let colors = GooglePalette('tol-rainbow', chartData.length)
    let renderOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'bottom'
      }
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
