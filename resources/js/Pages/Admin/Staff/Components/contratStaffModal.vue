<script setup>


const props = defineProps({
    staff: Object,
});


</script>
<template>
<div class="ui small modal" :id="'contratStaffModal'+staff.id">
  <div class="header">Contrat du staff : {{ staff.nom }} {{ staff.prenom }}</div>
  <div class="content">
    <embed  :src="'/staff/contrat/'+staff.contrat" type="application/pdf" width="100%" height="500px" />
  </div>
  <div class="actions">
  
    <div class="ui black cancel button">Fermer</div>
  </div>
</div>

</template>