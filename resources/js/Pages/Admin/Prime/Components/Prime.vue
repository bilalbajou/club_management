<script setup>
const props = defineProps({
    result:Object,
    index:Number
});

</script>

<template>
    <template>
     <tr>
      <td>{{index+1}}</td>
      <td>{{ result.nom }}</td>
      <td>{{ result.prenom }}</td>
      <td>{{ result.type }}</td>
      <td>{{ result.libellé }}</td>
      <td>{{ result.montant }}</td>
      <td>
        <div class="ui label">
          {{ result.equipe_nom }}
        </div>
      </td>
    </tr>



</template>
</template>