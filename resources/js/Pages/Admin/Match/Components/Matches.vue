<script setup>
import Matche from './Matche.vue';

const props = defineProps({
    matches:Array
});


</script>

<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Adversaire</th>
    <th>Date</th>
    <th>Championat</th>
    <th>Nombre du joueurs convoquées</th>
    <th>Etat</th>
    <th>Action</th>
  </tr></thead>
  <tbody>
     <Matche v-for="(matche, index)  in matches" :matche="matche" :index="index"/>

  </tbody>
</table>
            


</div>
</template>