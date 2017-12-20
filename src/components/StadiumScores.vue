<script>
// Stadium Scores Bar Chart
import { HorizontalBar } from 'vue-chartjs'
import map from 'lodash/map'
import GooglePalette from 'google-palette'

export default {
  extends: HorizontalBar,
  mounted () {
    this.$http.get('/static/data/stadium_runs.json', {}).then((res) => {
      let labels = map(res.body, (obj) => { return obj.Stadium_Name })
      let data = map(res.body, (obj) => { return obj.Average })
      let renderData = {
        labels: labels,
        datasets: [
          {
            backgroundColor: map(GooglePalette('tol-rainbow', res.body.length), color => '#' + color),
            data: data
          }
        ]
      }
      let renderOptions = {
        scales: {
          xAxes: [ {
            ticks: {
              stepSize: 1,
              min: 0,
              display: false,
              autoSkip: false
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
    }, () => {
      console.error('Error Loading Stadium Runs Data')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
