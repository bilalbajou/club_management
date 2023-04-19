<script setup>
const props = defineProps({
    result:Object,
    index:Number
});


</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td>{{ result.nom }} {{ result.prenom }}</td>
      <td>{{ result.montant }}</td>
      <td>{{ result.mois }}</td>
      <td>{{ result.reglement_date }}</td>
      <td>{{ result.reste }}</td>
      <td>
        {{ result.nom_equipe}}
      </td>
    </tr>



</template>
