<script>
import AdminDash from "@/Layouts/AdminDash.vue";


export default{

    layout:AdminDash
}


</script>


<script setup>
import addModalJoueur from "./Components/addModalJoueur.vue";



import Cards from "./Components/Cards.vue";
import { onMounted } from "vue";
import { Head } from "@inertiajs/vue3";


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
    joueurs:Object
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



const showModalAddJoueur = () => {
    $("#modalJoueur").modal("show");
};
</script>



<template>
    <!-- <Head title="Joueur" /> -->

   
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Joueurs</h2>
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
                        @click="showModalAddJoueur"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
         <div class="py-12">
            <Cards :joueurs="joueurs" />
         </div>
        

        <addModalJoueur :equipes="equipes " />
    <!-- </AdminDash> -->
</template>
