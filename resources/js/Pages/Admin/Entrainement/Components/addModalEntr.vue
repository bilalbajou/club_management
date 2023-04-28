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
    equipes: Array
    
});







const form = useForm({
    date: null,
    remarque: null,
    equipe: null
   
});




const resetFieldsForm=()=>{
     form.reset();
     $('.dropdown')
    .dropdown('clear')
  ;
}





const submitForm = () => {


    form.post(route("entrainements.store"), {
        onSuccess: () => {
            toastr["success"]("Entrainement a été programmé avec succés", "Opération réussi");
            form.reset();
            $('.dropdown')
            .dropdown('clear')
             ;
        },

        onError: () => {
            toastr["error"]("Une erreur inattendue s'est produite, veuillez réessayer", "Erreur");
        },
        

    });
};

</script>
<template>
    <div class="ui modal" id="modalEntrainement">
    <i class="close icon"></i>
    <div class="header">Programmer nouveau scéance d'entrainement</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field" :class="form.errors.date ? 'error' : ''">
                            <label>Date</label>

                            <input v-model="form.date" type="datetime-local" placeholder="Date" />
                        </div>
                        <div class="field" :class="form.errors.equipe ? 'error' : ''">
                            <label>Equipe</label>

                            <select v-model="form.equipe" class="ui dropdown" id="select">
                                <option v-for="equipe in equipes" :key="equipe.id" :value="equipe.id">
                                    {{ equipe.nom }}
                                </option>
                            </select>
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

            <div :disabled="form.processing" @click="submitForm" class="ui right labeled icon button" >
                Ajouter
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
