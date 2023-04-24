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
import Pagination from "./Components/Pagination.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Salaires from './Components/Salaires.vue';
import addModalSalaire from './Components/addModalSalaire.vue';
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
    salaires:Array,
    search:String,
    equipe:String,
    type:String,
    date:Array
});



const search=ref(props.search ??"");
const equipe=ref(props.equipe ?? "all");
const type=ref(props.type ?? "all");
const date=ref(props.date ?? []);


const filter=_.throttle(()=>{

console.log(search.value);
console.log(equipe.value);
console.log(type.value);
console.log(date.value);
router.get(route('salaires.index',{
    search:search.value,
    type:type.value,
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






const showModalSalaire = () => {
    $("#modalSalaire").modal("show");
};

</script>

<template>
    <!-- <Head title="Joueur" /> -->

    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header">Réglement des Salaires</h1>
            </div>
            
        </div>
    </div>

    <div class="pl-5">
            <div class="ui stackable five column grid">
                <div class="column">
                    <div class="ui left icon input">
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher" />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <div class="ui left icon input">
                        <VueDatePicker @internal-model-change="filter" model-type="yyyy.MM.dd"  v-model="date" range/>
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
                        @click="showModalSalaire"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>

    <Salaires :salaires="salaires" />
    <!-- <Pagination class="mt-6 flex justify-center items-center" :links="salaires.links" :search="search" :equipe="equipe" :type="type"/> -->



  <addModalSalaire :equipes="equipes" :personnes="personnes"/>
    <!-- </AdminDash> -->
</template>
