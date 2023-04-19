<script setup>
import Salaire from './Salaire.vue';

const props = defineProps({
  salaires:Array
});


</script>

<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <!-- <Cards :staffs="staffs" /> -->
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Nom & Prénom</th>
    <th>Montant</th>
    <th>Mois</th>
    <th>Date de réglement</th>
    <th>Reste</th>
    <th>Equipe</th>
  </tr></thead>
  <tbody>
     <Salaire v-for="(result, index)  in props.salaires" :result="result" :index="index"/>
  </tbody>
</table>
            


</div>
</template>