<script setup>

import Equipe from "./Equipe.vue";

const props=defineProps({
    equipes:Array
})

</script>


<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Nom</th>
    <th>Action</th>
  </tr></thead>
  <tbody>
     <Equipe v-for="(equipe, index)  in equipes" :equipe="equipe" :index="index" :key="index"/>

  </tbody>
</table>
            


</div>
</template>