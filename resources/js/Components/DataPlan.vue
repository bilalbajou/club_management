<script setup>

const props=defineProps({
    data_plan:Array
})

google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);

const arrayData_plan = props.data_plan.map(obj => Object.values(obj));

function drawChart() {



  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows(
    arrayData_plan
  );

 
  var options = {'title':'Organisation des plans',
                legend:'none',
             
                is3D:true
                 };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('data_div'));
  chart.draw(data, options);
}



</script>
<template>

<div id="data_div" style="width: 500px; height: 500px;"></div>


</template>


