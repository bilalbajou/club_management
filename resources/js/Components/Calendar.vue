<script setup>


 google.charts.load("current", {packages:["calendar"]});
      google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
       var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
      
      

       dataTable.addRows([
          [ new Date(2022, 3, 10), 37032 ],
          [ new Date(2022, 3, 14), 38024 ],
          [ new Date(2023, 3, 15), 38024 ]
         
        ]);

       var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

       var options = {
        
         title: "Calendrier des matches",
         height: 400,
         width: '100%',
         calendar: { cellSize: 17 ,
          underYearSpace: 10, // Bottom padding for the year labels.
      yearLabel: {
        fontName: 'Times-Roman',
        fontSize: 32,
        color: '#1A8763',
        bold: true,
        italic: true
      }
        },
         
       };

       chart.draw(dataTable, options);
   }

</script>

<template>




<div id="calendar_basic" style="width: 1000px; height: 350px;"></div>



</template>