<script setup>
import { useForm } from "@inertiajs/vue3";
import {ref} from "vue";
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
    personnes:Array
});


const resetFieldsForm=()=>{
        form.reset();
        $('.dropdown')
        .dropdown('clear')
    ;
}




const form = useForm({
    libelle:null,
    montant:null,
    remarque:null,
    exclure:[],
    equipe:null
});

let joueursFilters= ref([]);

const filterJoueurs=()=>{
    console.log(form.equipe);
    let joueursFilter = props.personnes.filter(personne => personne.equipe_id==form.equipe);
    joueursFilters=joueursFilter;
}



const submitForm = () => {


    form.post(route("primes.store"), {
        onSuccess: () => {
            toastr["success"]("Prime a été affecté avec succés", "Opération réussi");
            $('.dropdown')
    .dropdown('clear')
          ;
        },
        onError: () => {
            toastr["error"]("Prime n'a pas été affecté", "Opération échoué");
        }

    });
};

</script>
<template>
    <div class="ui modal" id="modalPrime">
    <i class="close icon"></i>
    <div class="header">Ajouter nouveau prime</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="two fields">
                        <div class="field" :class="form.errors.libelle ? 'error' : ''">
                            <label>Libellé</label>

                            <input v-model="form.libelle" type="text" placeholder="Libellé" />
                        </div>
                        <div class="field" :class="form.errors.montant ? 'error' : ''">
                            <label>Montant</label>

                            <input v-model="form.montant" type="text" placeholder="Montant" />
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
                    <div class="two fields">
                        <div class="field" :class="form.errors.date ? 'error' : ''">
                            <label>Remarque</label>
                            <input type="text" placeholder="Remarque" v-model="form.remarque">
                        </div>
                        <div class="field" :class="form.errors.exclure ? 'error' : ''">
                            <label>Exclure</label>
                            <select v-model="form.exclure" class="ui fluid multiple search selection dropdown"  multiple="">
                               <option v-for="joueur in joueursFilters" :value="joueur.id" :key="joueur.id" >{{ joueur.nom }} {{ joueur.prenom }}---{{ joueur.type }}</option>
                            </select>
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
