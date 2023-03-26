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
import addModalEntr from "./Components/addModalEntr.vue"
const showModalAddEntrainement = () => {
    $("#modalEntrainement").modal("show");
};

onMounted(() => {
    $(document).ready(function () {
       

        $(".button").popup({
            on: "hover",
        });
    });
});

const props = defineProps({
    equipes: Array,
    entrainements:Array

});




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
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher" />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <select @change="filter" v-model="equipe"  class="ui dropdown" id="select"> 
                        <option value="all">Choisir Equipe</option>
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
                <div class="column">
                    <div class="ui left icon input">
                        <input @keyup="filter" v-model="search" type="text" placeholder="Rechercher" />

                        <i class="users icon"></i>
                    </div>
                </div>
            </div>
        </div>

    <Entrainements :entrainements="entrainements"/>

    <addModalEntr :equipes="equipes"/>
    <!-- </AdminDash> -->
</template>
