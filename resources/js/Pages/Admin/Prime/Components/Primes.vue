<script setup>
import Prime from './Prime.vue';

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
    <th>Nom</th>
    <th>Prénom</th>
    <th>Type</th>
    <th>Libellé prime</th>
    <th>Montant</th>
    <th>Equipe</th>
  </tr></thead>
  <tbody>
     <Prime v-for="(result, index)  in props.joueurs" :result="result" :index="index"/>
  </tbody>
</table>
            


</div>
</template>