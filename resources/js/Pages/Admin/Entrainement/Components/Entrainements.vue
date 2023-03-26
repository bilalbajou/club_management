<script setup>
import Entrainement from "./Entrainement.vue";

const props = defineProps({
    entrainements:Array
});


</script>

<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <!-- <Cards :staffs="staffs" /> -->
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Date</th>
    <th>Equipe</th>
    <th>Etat</th>
    <th>Action</th>
  </tr></thead>
  <tbody>
     <Entrainement v-for="(entrainement, index)  in entrainements" :entrainement="entrainement" :index="index" :key="index"/>

  </tbody>
</table>
            


</div>
</template>