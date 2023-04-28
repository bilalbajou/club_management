<script>
import AdminDash from "@/Layouts/AdminDash.vue";


export default {
    layout: AdminDash
};
</script>

<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
import {router} from "@inertiajs/vue3";

import addPrime from './Components/addPrime.vue';
import Primes from './Components/Primes.vue';
import { onMounted } from "vue";

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
});

const props = defineProps({
    equipes:Array,
    personnes:Array,
    joueurs:Array,
    search:String,
    equipe:String,
    type:String,
});

const search=ref(props.search ??"");
const equipe=ref(props.equipe ?? "all");
const type=ref(props.type ?? "all");

const filter=_.throttle(()=>{

console.log(search.value);
console.log(equipe.value);
console.log(type.value);
router.get(route('primes.index',{
    search:search.value,
    type:type.value,
    equipe:equipe.value
}),{
      
},
{
   preserveState:true,
   replace:true,
   preserveScroll:true
})
},1000)






const showModalPrime = () => {
    $("#modalPrime").modal("show");
};

</script>

<template>

    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header">Primes</h1>
            </div>
            
        </div>
    </div>

    <div class="pl-5">
            <div class="ui stackable four column grid">
                <div class="column">
                    <div class="ui left icon input">
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher" />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <select @change="filter" v-model="type"  class="ui dropdown" id="select">
                        <option value="all">Tous</option>
                        <option value="joueur">Joueur</option>
                        <option value="staff">Staff</option>                        
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
                        @click="showModalPrime"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>

    <Primes :joueurs="joueurs" />

  <addPrime :equipes="equipes" :personnes="personnes"/>
</template>
