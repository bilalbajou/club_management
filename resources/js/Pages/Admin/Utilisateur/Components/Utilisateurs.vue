<script setup>

import Utilisateur from "./Utilisateur.vue";

const props=defineProps({
    users:Array
})

</script>


<template>
    <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <!-- <Cards :staffs="staffs" /> -->
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Nom</th>
    <th>Email</th>
    <th>Type utilisateur</th>
    <th>Etat</th>
    <th>Action</th>
 

  </tr></thead>
  <tbody>
     <Utilisateur v-for="(user, index)  in users" :user="user" :index="index" :key="index"/>
  </tbody>
</table>
            


</div>
</template>