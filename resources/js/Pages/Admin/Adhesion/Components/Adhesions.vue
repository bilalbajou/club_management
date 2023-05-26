<script setup>

import Adhesion from './Adhesion.vue';

const props = defineProps({
    joueurs:Array
});


</script>

<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <!-- <Cards :staffs="staffs" /> -->
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Nom & Prénom</th>
    <th>Age</th>
    <th>Montant global</th>
    <th>Dernière paiement</th>
    <th>Date d'echéance</th>
    <th>Equipe</th>
    <th>Plan</th>
    
  </tr>
</thead>
  <tbody>

     <Adhesion v-for="(joueur, index)  in joueurs" :joueur="joueur" :index="index" :key="index"/>

  </tbody>
</table>
            


</div>
</template>