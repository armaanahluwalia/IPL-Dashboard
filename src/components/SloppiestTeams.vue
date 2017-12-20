<script>
// Sloppiest Teams Bar Chart
import { HorizontalBar } from 'vue-chartjs'
import map from 'lodash/map'
import GooglePalette from 'google-palette'

export default {
  extends: HorizontalBar,
  mounted () {
    let dataSuccessCallback = (res) => {
      let labels = map(res.body, (obj) => { return obj.Team_Name })
      let data = map(res.body, (obj) => { return obj.Average_Extras })
      let colors = GooglePalette('tol-rainbow', res.body.length)
      let renderOptions = {
        scales: {
          xAxes: [ {
            stacked: true,
            ticks: {
              stepSize: 10,
              min: 0
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
    this.$http.get('/static/data/sloppiest_teams.json', {})
      .then(dataSuccessCallback, () => {
        console.error('Error Loading Sloppiest Teams Data')
      })
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
