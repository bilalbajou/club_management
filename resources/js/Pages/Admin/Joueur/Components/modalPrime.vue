<script setup>
import { useForm } from "@inertiajs/vue3";
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
    joueur:Object
});


const resetFieldsForm=()=>{
        form.reset();
      
}




const form = useForm({
    libelle:null,
    montant:null,
    remarque:null,
    joueur_id:props.joueur.id
});




const submitForm = () => {


    form.post(route("joueurs.prime"), {
        preserveScroll:true,
        onSuccess: () => {
            toastr["success"]("Prime a été affecté avec succés", "Opération réussi");
            form.reset();

        },
        onError: () => {
            toastr["error"]("Une erreur s'est produite", "Opération échoué");
        },
       

    });
};

</script>
<template>
    <div class="ui modal" :id="'primeJoueurModal'+props.joueur.id">
    <i class="close icon"></i>
    <div class="header">Affecter prime pour {{ joueur.nom }} {{  joueur.prenom  }}</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field" :class="form.errors.libelle ? 'error' : ''">
                            <label>Libellé</label>

                            <input v-model="form.libelle" type="text" placeholder="Libellé" />
                        </div>
                        <div class="field" :class="form.errors.montant ? 'error' : ''">
                            <label>Montant en (DH)</label>

                            <input v-model="form.montant" type="text" placeholder="Montant" />
                        </div>
                        <div class="field" :class="form.errors.remarque ? 'error' : ''">
                            <label>Remarque</label>
                            <input v-model="form.remarque" type="text" placeholder="Remarque" />

                        </div>

                    </div>
                 


                  
                </form>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">Annuler</div>
            <div class="ui black button" @click="resetFieldsForm">Rséinitialiser</div>

            <div :disabled="form.processing" @click="submitForm"  class="ui right labeled icon button">
                Ajouter
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
