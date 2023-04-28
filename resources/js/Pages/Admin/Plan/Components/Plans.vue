<script setup>

import Plan from "./Plan.vue";

const props=defineProps({
    plans:Array
})

</script>


<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Durée</th>
    <th>Montant</th>
    <th>Action</th>
  </tr></thead>
  <tbody>
     <Plan v-for="(plan, index)  in plans" :plan="plan" :index="index" :key="index"/>
  </tbody>
</table>
            


</div>
</template>