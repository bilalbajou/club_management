<script>
import AdminDash from "@/Layouts/AdminDash.vue";

// import route from "vendor/tightenco/ziggy/src/js";

export default {
    layout: AdminDash
};
</script>

<script setup>
import addUtilisateur from "./Components/addUtilisateur.vue";
import Utilisateurs from "./Components/Utilisateurs.vue";
import { onMounted } from "vue";

onMounted(() => {
    $(document).ready(function () {
        $(".button").popup({
            on: "hover",
        });
    });
});

const props = defineProps({
    users: Array
});


const showModalAddUser = () => {
    $("#modalUser").modal("show");
};

</script>

<template>
    <!-- <Head title="Joueur" /> -->

    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header">Utilisateurs</h1>


            </div>
            <div class="right floated three wide column">
                <button
                        @click="showModalAddUser"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
            </div>
        </div>
    </div>

    <Utilisateurs :users="users"/>
    <addUtilisateur />
    <!-- </AdminDash> -->
</template>
