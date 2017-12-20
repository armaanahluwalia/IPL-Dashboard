<script>
// Dismissal Types Doughnut Chart
import { Doughnut } from 'vue-chartjs'
import map from 'lodash/map'
import GooglePalette from 'google-palette'

export default {
  extends: Doughnut,
  mounted () {
    let dataSuccessCallback = (res) => {
      let labels = map(res.body, (obj) => { return obj.Dismissal_Type })
      let data = map(res.body, (obj) => { return obj.Count })
      let colors = GooglePalette('tol-rainbow', res.body.length)
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
    this.$http.get('/static/data/dismissal_types.json', {})
      .then(dataSuccessCallback, () => {
        console.error('Error Loading Dismissal Types Data')
      })
  }
}
</script>
