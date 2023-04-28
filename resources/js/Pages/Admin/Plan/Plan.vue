<script>
import AdminDash from "@/Layouts/AdminDash.vue";

export default {
    layout: AdminDash,
};
</script>

<script setup>
import { onMounted } from "vue";
import addPlan from './Components/addPlan.vue';
import Plans from './Components/Plans.vue';

onMounted(() => {
    $(document).ready(function () {
    
        $(".button").popup({
            on: "hover",
        });
    });
});

const props = defineProps({
    plans: Array,
});


const showModalPlan = () => {
    $("#modalPlan").modal("show");
};

</script>

<template>

    <div class="pt-10">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header font-extrabold">Plans</h1>
            </div>
            <div class="right floated three wide column">
                <button
                        @click="showModalPlan"
                        class="ui primary button"
                    >
                        Ajouter
                    </button>
            </div>
        </div>
    </div>

    <Plans :plans="plans"/>
    <addPlan />
</template>
