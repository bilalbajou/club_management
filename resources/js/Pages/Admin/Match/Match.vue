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
import Matches from "./Components/Matches.vue";
import { onMounted } from "vue";
// import Pagination from './Components/Pagination.vue';
// import { Head } from "@inertiajs/vue3";

import {router} from "@inertiajs/vue3";
import { ref } from "vue";
import {reactive} from "vue";
import {watch} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

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
    joueurs:Array,
    matches:Array,
    search:String,
    equipe:String,
    etat:String,
    date:Array
});

const search=ref(props.search ??"");
const equipe=ref(props.equipe ?? "all");
const etat=ref(props.etat ?? "all");
const date=ref(props.date ?? []);

const filter=_.throttle(()=>{

console.log(search.value);
console.log(equipe.value);
console.log(etat.value);
router.get(route('matches.index',{
    search:search.value,
    etat:etat.value,
    equipe:equipe.value,
    date:date.value
}),{
      
},
{
   preserveState:true,
   replace:true,
   preserveScroll:true
})
},1000)





const showModalAddMatch = () => {
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
            <div class="ui stackable five column grid">
                <div class="column">
                    <div class="ui left icon input">
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher par adversaire" />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <div class="ui left icon input">
                        <VueDatePicker @internal-model-change="filter" model-type="yyyy.MM.dd"  v-model="date" range/>
                    </div>
                </div>
                <div class="column">
                    <select @change="filter" v-model="etat"  class="ui dropdown" id="select">
                        <option value="all">Tous</option>
                        <option value="Annulé">Annulé</option>
                        <option value="reporté">Reporté</option>
                        <option value="programmé">Programmé</option>
                        <option value="terminé">Terminé</option>
                        
                    </select>
                </div>
                <div class="column">
                    <select @change="filter" v-model="equipe"  class="ui dropdown" id="select"> 
                        <option value="all">Tous</option>
                        <option v-for="equipe in equipes" :key="equipe.id" :value="equipe.id">{{ equipe.nom }}</option>
                        
                    </select>
                </div>
                <div class="column">
                    <button
                        @click="showModalAddMatch"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
         <Matches :matches="matches"/>
         <!-- <Pagination class="mt-6 flex justify-center items-center" :links="matches.links" :search="search" :equipe="equipe" :etat="etat" :date="date" /> -->


        
    <addModalMatch :equipes="equipes" :joueurs="joueurs"/>
    <!-- </AdminDash> -->
</template>


