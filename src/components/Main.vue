<template>
  <div class="container">
    <scrollactive class="nav" :offset="80" :duration="800">
      <a href="#chart-1" class="scrollactive-item chart-nav-item">
        <svgicon name="cricket-player-with-bat" class="chart-nav-icon" color="#a83b7a"></svgicon>
      </a>
      <a href="#chart-2" class="scrollactive-item chart-nav-item">
        <svgicon name="stumps" class="chart-nav-icon" color="#a83b7a"></svgicon>
      </a>
      <a href="#chart-3" class="scrollactive-item chart-nav-item">
        <svgicon name="ball" class="chart-nav-icon" color="#a83b7a"></svgicon>
      </a>
      <a href="#chart-4" class="scrollactive-item chart-nav-item">
        <svgicon name="catch" class="chart-nav-icon" color="#a83b7a"></svgicon>
      </a>
    </scrollactive>
    <div class="stadium-scores-wrapper chart-wrapper" id="chart-1">
      <div class="chart-title">
        <svgicon name="cricket-player-with-bat" class="chart-icon" color="#a83b7a"></svgicon>
        <h1>Highest Scoring <br>Pitches</h1>
      </div>
      <div class="chart-container">
        <h3>Average Runs Per Game</h3>
        <stadium-scores :height="700"></stadium-scores>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="dismissal-types-wrapper chart-wrapper" id="chart-2">
      <div class="chart-title">
        <h1>Dismissal Distribution</h1>
        <svgicon name="stumps" class="chart-icon" color="#a83b7a"></svgicon>
      </div>
      <div class="chart-container">
        <dismissal-types :height="550"></dismissal-types>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="sloppiest-teams-wrapper chart-wrapper" id="chart-3">
      <div class="chart-title">
        <svgicon name="ball" class="chart-icon" color="#a83b7a"></svgicon>
        <h1>Sloppiest Bowling</h1>
      </div>
      <div class="chart-container">
        <h3>Average Extras Per Game</h3>
        <sloppiest-teams></sloppiest-teams>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="best-fielders-wrapper chart-wrapper" id="chart-4">
      <div class="chart-title">
        <h1>Top Fielders</h1>
        <svgicon name="catch" class="chart-icon" color="#a83b7a"></svgicon>
      </div>
      <div class="chart-container">
        <h3>Non Wicket-Keepers</h3>
        <top-fielders></top-fielders>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="footer">
      <div>Icons made by <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan">Vignesh Oviyan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
  </div>
</template>

<script>
  import '../icons'
  import StadiumScores from './StadiumScores'
  import DismissalTypes from './DismissalTypes'
  import SloppiestTeams from './SloppiestTeams'
  import TopFielders from './TopFielders'
  export default {
    components: {
      StadiumScores,
      DismissalTypes,
      SloppiestTeams,
      TopFielders
    }
  }
</script>

<style scoped>
.clearfix {
  clear:both;
}
.container {
}
h1,h3 {
  text-align: center;
}
h1 {
  font-size: 68px;
  letter-spacing: -2px;
  margin: 20px;
}

.nav {
  padding: 10px;
  text-align: center;
  position : fixed;
  right: 0;
  height: 100%;
  width: 50px;
}
.nav .chart-nav-item {
    opacity: 0.3;
}
.nav .chart-nav-item.is-active {
    opacity: 1;
}
.chart-wrapper {
  padding: 5% 100px 5% 5%;
}
.chart-wrapper:nth-child(odd) {
}
.chart-nav-item {
  background: white;
  padding: 20px;
  display: inline-block;
}
.chart-nav-icon {
  width: 30px;
}
.chart-title {
  text-align: center;
  margin: 7% 0;
}
.chart-icon {
  width: 8% !important;
  margin: auto;
  border: 6px solid #a83b7a;
  padding: 3%;
  background: white;
  -webkit-box-shadow: 4px 6px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 6px 12px 0px rgba(0, 0, 0, 0.2);
}
.chart-wrapper:nth-child(odd) .chart-title,
.chart-wrapper:nth-child(odd) .chart-container {
  float: left;
  width: 50%;
}
.chart-wrapper:nth-child(even) .chart-title,
.chart-wrapper:nth-child(even) .chart-container {
  float: right;
  width: 50%;
}
.footer {
  text-align: center;
  padding: 30px;
  font-size: 8px;
  color: #2c3e50;
}
.footer a {
  color: #2c3e50;
}
@media only screen and (max-width: 1000px) {
  .chart-title,
  .chart-container {
    float: none !important;
    width: auto !important;
  }
  h1 {
    font-size: 42px;
  }
  .chart-wrapper {
    border-bottom: 25px solid #efefef;
  }
}
</style>
