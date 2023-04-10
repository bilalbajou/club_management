<script>
import AdminDash from "@/Layouts/AdminDash.vue";

// import route from "vendor/tightenco/ziggy/src/js";

export default {
    layout: AdminDash
};
</script>

<script setup>
import addPrime from './Components/addPrime.vue';
import Primes from './Components/Primes.vue';
import { onMounted } from "vue";

onMounted(() => {
    $(document).ready(function () {
        $(".button").popup({
            on: "hover",
        });
    });
});

const props = defineProps({
    equipes:Array,
    personnes:Array,
    results:Array
});


const showModalPrime = () => {
    $("#modalPrime").modal("show");
};

</script>

<template>
    <!-- <Head title="Joueur" /> -->

    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header">Primes</h1>


            </div>
            <div class="right floated three wide column">
                <button
                        @click="showModalPrime"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
            </div>
        </div>
    </div>

    <Primes :results="results" />

  <addPrime :equipes="equipes" :personnes="personnes"/>
    <!-- </AdminDash> -->
</template>
