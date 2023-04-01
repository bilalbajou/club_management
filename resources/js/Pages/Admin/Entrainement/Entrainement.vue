<script>
import AdminDash from "@/Layouts/AdminDash.vue";
// import route from "vendor/tightenco/ziggy/src/js";

export default {
    layout: AdminDash,
};
</script>

<script setup>
import Entrainements from "./Components/Entrainements.vue";
import { onMounted } from "vue";
import addModalEntr from "./Components/addModalEntr.vue";
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const showModalAddEntrainement = () => {
    $("#modalEntrainement").modal("show");
};

onMounted(() => {
    $(document).ready(function () {
        $('.ui.dropdown')
  .dropdown()
;
       

        $(".button").popup({
            on: "hover",
        });
    });
});

const props = defineProps({
    equipes: Array,
    entrainements:Array,
    etat:String,
    equipe:String,
    date:Array,

});

const equipe=ref(props.equipe ?? "all");
const etat=ref(props.etat ?? "all");
const date=ref(props.date ?? []);

const filter=_.throttle(()=>{


console.log(equipe.value);
console.log(etat.value);
console.log(date.value);
router.get(route('entrainements.index',{

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





</script>

<template>
    <!-- <Head title="Joueur" /> -->

    <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Entrainements</h2>
                </div>
            </div>
        </div>
        <div class="pl-5">
            <div class="ui stackable four column grid">
                <div class="column">
                    <div class="ui left icon input">
                        <VueDatePicker @internal-model-change="filter" model-type="yyyy.MM.dd"  v-model="date" :partial-range="true" range />
                    </div>
                </div>
                <div class="column">
                    <select @change="filter" v-model="etat"  class="ui dropdown" id="select">
                        <option value="all">Tous</option>
                        <option value="annulé">Annulé</option>
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
                        @click="showModalAddEntrainement"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </div>

    <Entrainements :entrainements="entrainements"/>

    <addModalEntr :equipes="equipes"/>
    <!-- </AdminDash> -->
</template>
