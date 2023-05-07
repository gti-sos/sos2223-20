<script>
  import { onMount } from "svelte";
  // @ts-ignore
  async function loadChart() {
    // Data retrieved from https://netmarketshare.com/
    // Radialize the colors
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7,
          },
          stops: [
            [0, color],
            [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
          ],
        };
      }),
    });

    // Build the chart
    Highcharts.chart("container", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Browser market shares in April, 2022",
        align: "left",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            connectorColor: "silver",
          },
        },
      },
      series: [
        {
          name: "Share",
          data: [
            { name: "Chrome", y: 73.24 },
            { name: "Edge", y: 12.93 },
            { name: "Firefox", y: 4.73 },
            { name: "Safari", y: 2.5 },
            { name: "Internet Explorer", y: 1.65 },
            { name: "Other", y: 4.93 },
          ],
        },
      ],
    });
  }

  onMount(async () =>{
    loadChart();
  })
</script>

<svelte:head>
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
  <script src="https://code.highcharts.com/modules/accessibility.js"></script>

  <figure class="highcharts-figure">
    <div id="container" />
    <p class="highcharts-description">
      All color options in Highcharts can be defined as gradients or patterns.
      In this chart, a gradient fill is used for decorative effect in a pie
      chart.
    </p>
  </figure>
</svelte:head>
