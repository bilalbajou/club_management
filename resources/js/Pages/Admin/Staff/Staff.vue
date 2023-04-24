<script>
import AdminDash from "@/Layouts/AdminDash.vue";


export default{

    layout:AdminDash
}


</script>


<script setup>


import addModalStaff from "./Components/addModalStaff.vue";
import Pagination from './Components/Pagination.vue';

import Cards from "./Components/Cards.vue";
import { onMounted } from "vue";
import { Head } from "@inertiajs/vue3";

import { router } from '@inertiajs/vue3'

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
    staffs:Object,
    fonction:String,
    equipe:String,
    search:String
});


const search=ref(props.search ?? "");
const equipe=ref(props.equipe ?? "all");
const fonction=ref(props.fonction ?? "all");

const filter=()=>{

console.log(search.value);
console.log(equipe.value);
console.log(fonction.value);
router.get(route('staffs.index',{
    search:search.value,
    fonction:fonction.value,
    equipe:equipe.value
}),{
      
},
{
   preserveState:true,
   replace:true,
   preserveScroll:true
})
}



const showModalAddStaff = () => {
    $("#modalStaff").modal("show");
};
</script>



<template>
    <!-- <Head title="Joueur" /> -->

   
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Staff technique</h2>
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
                    <select @change="filter" v-model="fonction"  class="ui dropdown" id="select">
                        <option value="all">Tous</option>
                        <option value="Entraineur">Entraineur</option>
                        <option value="Directeur technique">Directeur technique</option>
                        <option value="Entraineur adjoint">Entraineur adjoint</option>
                        <option value="Staff médical">Staff médical</option>
                        <option value="Entraineur du gardien">Entraineur du gardien</option>
                        
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
                        @click="showModalAddStaff"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
         <div class="py-12">
            <Cards :staffs="staffs" />
            <Pagination class="mt-6 flex justify-center items-center" :links="staffs.links" :search="search" :equipe="equipe" :fonction="fonction" />

         </div>
         
        

        <addModalStaff :equipes="equipes " />
    <!-- </AdminDash> -->
</template>
