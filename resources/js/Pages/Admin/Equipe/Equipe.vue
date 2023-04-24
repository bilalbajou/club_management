<script>
import AdminDash from "@/Layouts/AdminDash.vue";
// import route from "vendor/tightenco/ziggy/src/js";

export default {
    layout: AdminDash,
};
</script>

<script setup>
import { onMounted } from "vue";
import addModalEquipe from './Components/addModalEquipe.vue';
import Equipes from './Components/Equipes.vue';

onMounted(() => {
    $(document).ready(function () {
    
        $(".button").popup({
            on: "hover",
        });
    });
});

const props = defineProps({
    equipes: Array,
});


const showModalAddEquipe = () => {
    $("#modalEquipe").modal("show");
};

</script>

<template>
    <!-- <Head title="Joueur" /> -->

    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header font-extrabold">Equipe</h1>


            </div>
            <div class="right floated three wide column">
                <button
                        @click="showModalAddEquipe"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
            </div>
        </div>
    </div>

    <Equipes :equipes="equipes"/>
    <addModalEquipe />
    <!-- </AdminDash> -->
</template>
