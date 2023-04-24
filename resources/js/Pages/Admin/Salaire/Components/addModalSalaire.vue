<script setup>
import { useForm } from "@inertiajs/vue3";
import {ref} from "vue";
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
    mois:null,
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


    form.post(route("salaires.store"), {
        onSuccess: () => {
            toastr["success"]("Salaire a été régle avec succés", "Opération réussi");
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
    <div class="ui modal" id="modalSalaire">
    <i class="close icon"></i>
    <div class="header">Ajouter nouveau réglement de salaire</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="two fields">
                        <div class="field" :class="form.errors.libelle ? 'error' : ''">
                            <label>Libellé</label>

                            <input v-model="form.libelle" type="text" placeholder="Libellé" />
                        </div>
                        <div class="field" :class="form.errors.mois ? 'error' : ''">
                            <label>Mois</label>
                            <select v-model="form.mois" class="ui dropdown" id="select">
                                <option value="janvier">Janvier</option>
                                <option value="fevrier">Février</option>
                                <option value="mars">Mars</option>
                                <option value="avril">Avril</option>
                                <option value="mai">Mai</option>
                                <option value="juin">Juin</option>
                                <option value="juillet">Juillet</option>
                                <option value="aout">Août</option>
                                <option value="septembre">Septembre</option>
                                <option value="octobre">Octobre</option>
                                <option value="novembre">Novembre</option>
                                <option value="decembre">Décembre</option>
                            </select>

                            
                        </div>
                        

                    </div>
                    <div class="two fields">
                        <div class="field" :class="form.errors.equipe ? 'error' : ''">
                            <label>Equipe</label>

                            <select @change="filterJoueurs()"  v-model="form.equipe" class="ui dropdown" id="select">
                                <option v-for="equipe in equipes" :key="equipe.id" :value="equipe.id">
                                    {{ equipe.nom }}
                                </option>
                            </select>
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
