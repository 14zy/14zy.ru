  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Компьютеры',     14],
      ['Автомобили',     9],
      ['Видеоигры', 7],
      ['Шалык',     5],
      ['Танцы',  4],
      ['Другое', 2]
    ]);

    var options = {
      pieHole: 0,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }