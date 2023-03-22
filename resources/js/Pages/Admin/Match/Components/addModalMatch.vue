<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// toastr add player
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "1500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}



const props = defineProps({
    equipes: Array,
    joueurs:Array
});




let joueursFilters= ref([]);



const form = useForm({
    adversaire: null,
    lieu: null,
    equipe: null,
    exclure: [],
    remarque: null,
    date: null,
    championat:null
});


const filterJoueurs=()=>{
    console.log(form.equipe);
    let joueursFilter = props.joueurs.filter(joueur => joueur.equipe_id==form.equipe);
    joueursFilters=joueursFilter;
}

const resetFieldsForm=()=>{
     form.reset();
     $('.dropdown')
    .dropdown('clear')
  ;
}





const submitForm = () => {


    form.post(route("matches.store"), {
        onSuccess: () => {
            toastr["success"]("Staff a été ajouté avec succés", "Opération réussi");
            form.reset();
            $('.dropdown')
    .dropdown('clear')
          ;
        },
        onError: () => {
            toastr["warning"]("Veuillez vérifier votre champs", "Opération echoué");
        }

    });
};

</script>
<template>
    <div class="ui modal" id="modalMatch">
    <i class="close icon"></i>
    <div class="header">Ajouter nouveau match</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="two fields">
                        <div class="field" :class="form.errors.adversaire ? 'error' : ''">
                            <label>Adversaire</label>

                            <input v-model="form.adversaire" type="text" placeholder="Adveraire" />
                        </div>
                        <div class="field" :class="form.errors.lieu ? 'error' : ''">
                            <label>Lieu</label>

                            <input v-model="form.lieu" type="text" placeholder="Lieu" />
                        </div>

                    </div>
                    <div class="two fields">
                        <div class="field" :class="form.errors.date ? 'error' : ''">
                            <label>Date</label>
                            <input type="datetime-local" v-model="form.date">

                           
                        </div>
                        <div class="field" :class="form.errors.equipe ? 'error' : ''">
                            <label>Equipe</label>

                            <select @change="filterJoueurs()"  v-model="form.equipe" class="ui dropdown" id="select">
                                <option v-for="equipe in equipes" :key="equipe.id" :value="equipe.id">
                                    {{ equipe.nom }}
                                </option>
                            </select>
                        </div>

                    </div>
                    <div class="three fields">
                        <div class="field" :class="form.errors.exclure ? 'error' : ''">
                            <label>Exclure</label>
                            <select v-model="form.exclure" class="ui fluid multiple search selection dropdown"  multiple="">
                               <option v-for="joueur in joueursFilters" :value="joueur.id" :key="joueur.id" >{{ joueur.nom }} {{ joueur.prenom }} {{ joueur.equipe_id }}</option>
                            </select>
                        </div>
                        <div class="field" :class="form.errors.exclure ? 'error' : ''">
                            <label>Championat</label>
                            <input type="text" v-model="form.championat" placeholder="Championat" />

                        </div>

                        <div class="field" :class="form.errors.remarque ? 'error' : ''">
                            <label>Remarque</label>

                            <input type="text" v-model="form.remarque" placeholder="Remarque" />
                        </div>
                    </div>


                  
                </form>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">Annuler</div>
            <div class="ui black button" @click="resetFieldsForm">Rséinitialiser</div>

            <div :disabled="form.processing" @click="submitForm" class="ui right labeled icon button">
                Ajouter
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
