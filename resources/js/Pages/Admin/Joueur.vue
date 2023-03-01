<script>
import AdminDash from "@/Layouts/AdminDash.vue";

export default{

    layout:AdminDash
}


</script>


<script setup>
import addModalJoueur from "./Components/addModalJoueur.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const props = defineProps({
    equipes: Array,
});

console.log(props.equipes);


const showModalAddJoueur = () => {
    $(".ui.modal").modal("show");
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
                        <input type="text" placeholder="Search users..." />

                        <i class="users icon"></i>
                    </div>
                </div>
                <div class="column">
                    <select name="gender" class="ui dropdown" id="select">
                        <option selected value="all">Tous</option>
                        <option value="male">Gardien</option>
                        <option value="male">Defense</option>
                        <option value="male">Milieu</option>
                        <option value="male">Attack</option>
                        
                    </select>
                </div>
                <div class="column">
                    <select name="gender" class="ui dropdown" id="select"> 
                        <option value="all" selected >Tous</option>
                        <option v-for="equipe in equipes" :key="equipe.id" value="{{ equipe.id  }}">{{ equipe.nom }}</option>
                        
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


        <addModalJoueur :equipes="equipes " />
    <!-- </AdminDash> -->
</template>
