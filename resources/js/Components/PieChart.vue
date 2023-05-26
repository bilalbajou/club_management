<script setup>

const props=defineProps({
    data_pie:Array
})

google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);

const arrayData_pie = props.data_pie.map(obj => Object.values(obj));

function drawChart() {



  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows(
    arrayData_pie
  );

 
  var options = {'title':'Organisation des joueurs',
                legend:'none',
             
                is3D:true
                 };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}



</script>
<template>

<div id="chart_div" style="width: 500px; height: 500px;"></div>


</template>


