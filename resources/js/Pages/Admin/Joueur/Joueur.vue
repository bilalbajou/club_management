<script>
import AdminDash from "@/Layouts/AdminDash.vue";


export default{
    
    layout:AdminDash,
    components:{Cards,addModalJoueur,Pagination}
}


</script>


<script setup>
import addModalJoueur from "./Components/addModalJoueur.vue";



import Cards from "./Components/Cards.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import Pagination from "./Components/Pagination.vue";
import { router } from '@inertiajs/vue3'

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
    joueurs:Object,
    poste:String,
    equipe:String,
    search:String,
    plans:Object
});

const search=ref(props.search ??"");
const equipe=ref(props.equipe ?? "all");
const poste=ref(props.poste ?? "all");

const filter=_.throttle(()=>{


router.get(route('joueurs.index',{
    search:search.value,
    poste:poste.value,
    equipe:equipe.value
}),{
      
},
{
   preserveState:true,
   replace:true,
   preserveScroll:true
})
},1000)





const showModalAddJoueur = () => {
    $("#modalJoueur").modal("show");
};
</script>



<template>

   
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
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher" />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <select @change="filter" v-model="poste"  class="ui dropdown" id="select">
                        <option value="all">Tous</option>
                        <option value="Gardien">Gardien</option>
                        <option value="Defense">Defense</option>
                     
                        
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
            <Pagination class="mt-6 flex justify-center items-center" :links="joueurs.links" :search="search" :equipe="equipe" :poste="poste" />
         </div>
        

        <addModalJoueur :equipes="equipes" :plans="plans"/>
</template>
