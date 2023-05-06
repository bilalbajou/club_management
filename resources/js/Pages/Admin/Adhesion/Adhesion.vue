<script>
import AdminDash from "@/Layouts/AdminDash.vue";
import Adhesions from "./Components/Adhesions.vue";

export default {
    layout: AdminDash,
    components: { Adhesions }
};
</script>

<script setup>
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";

onMounted(() => {
    $(document).ready(function(){
        $('.dropdown')
    .dropdown()
  ;
 
   
  });
})




const props = defineProps({
    joueurs: Array,
    equipes: Array,
    plans:Array,
    search:String,
    equipe:String,
    etat:String,
    plan:String
});

const search=ref(props.search ??"");
const equipe=ref(props.equipe ?? "all");
const etat=ref(props.etat ?? "all");
const plan=ref(props.plan ?? "all");


const filter=_.throttle(()=>{


router.get(route('adhesions.index',{
    search:search.value,
    etat:etat.value,
    equipe:equipe.value,
    plan:plan.value
}),{
      
},
{
   preserveState:true,
   replace:true,
   preserveScroll:true
})
},1000)




</script>

<template>
    <!-- <Head title="Joueur" /> -->

    <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Abonnement d'adhésion</h2>
                </div>
            </div>
        </div>
        <div class="pl-5">
            <div class="ui stackable four column grid">
                <div class="column">
                    <div class="ui left icon input">
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher" />
                        <i class="search icon"></i>

                      
                    </div>
                </div>
                <div class="column">
                    <select @change="filter" v-model="etat"  class="ui dropdown" id="select">
                      
                        <option value="all">Tous</option>
                        <option value="expiré">Abonnement expiré</option>
                        <option value="valide">Abonnement valide</option>
                        
                    </select>
                </div>
                <div class="column">
                    <select @change="filter" v-model="equipe"  class="ui dropdown" id="select"> 
                        <option value="all">Tous</option>
                        <option v-for="equipe in equipes" :key="equipe.id" :value="equipe.id">{{ equipe.nom }}</option>
                        
                    </select>
                </div>
                <div class="column">
                    <select @change="filter" v-model="plan"  class="ui dropdown" id="select"> 
                        <option value="all">Tous</option>
                        <option v-for="plan in plans" :key="plan.id" :value="plan.id">{{ plan.duree }} Mois --- {{ plan.montant }} DH</option>
                    </select>
                </div>
            </div>
        </div>

    <Adhesions :joueurs="joueurs"/>

    <!-- </AdminDash> -->
</template>
