<script>
import AdminDash from "@/Layouts/AdminDash.vue";


export default{

    layout:AdminDash
}


</script>


<script setup>


// import addModalStaff from "./Components/addModalStaff.vue";

// import Cards from "./Components/Cards.vue";
import addModalMatch from "./Components/addModalMatch.vue";

import { onMounted } from "vue";
// import { Head } from "@inertiajs/vue3";


import { ref } from "vue";
import {reactive} from "vue";
import {watch} from "vue";

onMounted(() => {
    $(document).ready(function(){
        $('.dropdown')
    .dropdown()
  ;
 
    $('.button')
    .popup({
      on: 'hover'
    })
  ;
  });
})




const props = defineProps({
    equipes: Array,
    joueurs:Array
});


const filter = reactive({
    search:"",
    equipe:"all",
    poste:"all"
})
watch(filter, (value) => {
  Inertia.get(
    "/joueurs",
    { search: value },
    {
      preserveState: true,
    }
  );

     
}); 



const showModalAddStaff = () => {
    $("#modalMatch").modal("show");
};
</script>



<template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Match</h2>
                </div>
            </div>
        </div>
        <div class="pl-5">
            <div class="ui stackable four column grid">
                <div class="column">
                    <div class="ui left icon input">
                        <input v-model="filter.search" type="text" placeholder="Search users..." />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <select v-model="filter.poste"  class="ui dropdown" id="select">
                        <option value="all">Tous</option>
                        <option value="Gardien">Gardien</option>
                        <option value="Defense">Defense</option>
                        <option value="Milieu">Milieu</option>
                        <option value="Attack">Attack</option>
                        
                    </select>
                </div>
                <div class="column">
                    <select v-model="filter.equipe"  class="ui dropdown" id="select"> 
                        <option value="all">Tous</option>
                        <option v-for="equipe in equipes" :key="equipe.id" :value="equipe.id">{{ equipe.nom }}</option>
                        
                    </select>
                </div>
                <div class="column">
                    <button
                        @click="showModalAddStaff"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
         <div class="py-12" style="padding-left: 10px !important;padding-right: 10px !important;">
            <!-- <Cards :staffs="staffs" /> -->
            <table class="ui celled table stackable">
  <thead>
    <tr><th>#</th>
    <th>Adversaire</th>
    <th>date</th>
    <th>championat</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
      <td data-label="Job">Engineer</td>

    </tr>

  </tbody>
</table>
            


         </div>
        
    <addModalMatch :equipes="equipes" :joueurs="joueurs"/>
    <!-- </AdminDash> -->
</template>


