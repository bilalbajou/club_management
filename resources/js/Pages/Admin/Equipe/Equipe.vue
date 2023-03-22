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

    <div class="py-12">
        <div class="ui grid" style="padding-left: 20px !important;padding-right: 20px !important;">
            <div class="left floated five wide column">
                <h1 class="ui header">Equipe</h1>


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

    <div
        class="py-5"
        style="padding-left: 10px !important; padding-right: 10px !important"
    >
        <table class="ui compact celled definition table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Registration Date</th>
                    <th>E-mail address</th>
                    <th>Premium Plan</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="collapsing">
                        <div class="ui fitted slider checkbox">
                            <input type="checkbox" /> <label></label>
                        </div>
                    </td>
                    <td>John Lilki</td>
                    <td>September 14, 2013</td>
                    <td>jhlilk22@yahoo.com</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td class="collapsing">
                        <div class="ui fitted slider checkbox">
                            <input type="checkbox" /> <label></label>
                        </div>
                    </td>
                    <td>Jamie Harington</td>
                    <td>January 11, 2014</td>
                    <td>jamieharingonton@yahoo.com</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td class="collapsing">
                        <div class="ui fitted slider checkbox">
                            <input type="checkbox" /> <label></label>
                        </div>
                    </td>
                    <td>Jill Lewis</td>
                    <td>May 11, 2014</td>
                    <td>jilsewris22@yahoo.com</td>
                    <td>Yes</td>
                </tr>
            </tbody>
            <tfoot class="full-width">
                <tr>
                    <th></th>
                    <th colspan="4">
                        <div
                            class="ui right floated small primary labeled icon button"
                        >
                            <i class="user icon"></i> Add User
                        </div>
                        <div class="ui small button">Approve</div>
                        <div class="ui small disabled button">Approve All</div>
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>

    <addModalEquipe />
    <!-- </AdminDash> -->
</template>
