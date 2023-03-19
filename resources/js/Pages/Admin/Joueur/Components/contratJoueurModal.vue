<script setup>


const props = defineProps({
    joueur: Object,
});


</script>
<template>
<div class="ui small modal" :id="'contratJoueurModal'+joueur.id">
  <div class="header">Contrat du joueur : {{ joueur.nom }} {{ joueur.prenom }}</div>
  <div class="content">
    <embed  :src="'/joueur/contrat/'+joueur.contrat" type="application/pdf" width="100%" height="500px" />
  </div>
  <div class="actions">
  
    <div class="ui black cancel button">Fermer</div>
  </div>
</div>

</template>