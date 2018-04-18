$(function () {
  if (Highcharts) {
    // http://jsfiddle.net/bvj7oeuf/5/
    Highcharts.chart('benchmarks-performance', {
      title: {
        text: ''
      },
      chart: {
        type: 'bar'
      },
      xAxis: {
        categories: [
          'HAP',
          'HAP Q',
          'H.264',
          'ProRes 422',
          'HAP Alpha',
          'HAP Q Alpha',
          'ProRes 4444'
        ]
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Approximate max number of movies at 4k / 30 fps<br><em>2.7 GHz Intel Core i7 w/ AMD Radeon Pro 460</em>'
        }
      },

      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Codec',
        data: [
          14,
          6,
          1,
          3,
          7,
          4,
          2
      ]}]
    });

    // http://jsfiddle.net/vgfdLo65/7/
    Highcharts.chart('benchmarks-filesize', {
      chart: {
        type: 'columnrange',
        inverted: true
      },
      title: {
        text: '4k Video Data Rate Range'
      },

      xAxis: {
        categories: [
        'Hap',
        'HAP Q',
        'H.264',
        'ProRes 422',
        'HAP Alpha',
        'HAP Q Alpha',
        'ProRes 4444']
      },
      yAxis: {
        title: {
          text: 'Data rate in Mbit/s'
        },
        min: 0,
        max: 4000
      },
      tooltip: {
        valueSuffix: 'Mb/s'
      },
      plotOptions: {
        columnrange: {
          dataLabels: {
            enabled: false
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Video codec',
        data: [
          [47.48,1006.7],
          [95.43,2013.27],
          [0.222,171.82],
          [20.7,665.33],
          [95.07,2013.27],
          [142.82,3019.84],
          [30.53,3833.52]
        ]
      }]
    });
  }
})
