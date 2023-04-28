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
    salaire:Object
});



const resetFieldsForm=()=>{
        form.reset();
        $('.dropdown')
            .dropdown('clear')
             ;
        
      
}




const form = useForm({
    montant:props.salaire.montant,
    mois:props.salaire.mois,
    reglement_date:props.salaire.reglement_date
});




const submitForm = () => {


    form.patch(route("salaires.update",props.salaire.id), {
        preserveScroll:true,
        onSuccess: () => {
           
            toastr["success"]("Régelement de salaire a été modifié avec succés", "Opération réussi");
         

            $('#editModalSalaire'+props.salaire.id).modal('hide');

        },
        onError: () => {
            toastr["error"]("Une erreur s'est produite", "Opération échoué");
        },

    });
};

</script>
<template>
    <div class="ui modal" :id="'editModalSalaire'+props.salaire.id">
    <i class="close icon"></i>
    <div class="header">Modifier </div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field" :class="form.errors.reglement_date ? 'error' : ''">
                            <label>Date de réglement</label>

                            <input v-model="form.reglement_date" type="datetime-local" placeholder="Date de réglement" />
                        </div>
                        <div class="field" :class="form.errors.montant ? 'error' : ''">
                            <label>Montant en (DH)</label>

                            <input v-model="form.montant" type="text" placeholder="Montant" />
                        </div>
                        <div class="field" :class="form.errors.mois ? 'error' : ''">
                            <label>Mois</label>
                            <select
                                v-model="form.mois"
                                class="ui dropdown"
                                id="select"
                            >
                                <option value="janvier">Janvier</option>
                                <option value="février">Février</option>
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
                 


                  
                </form>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">Annuler</div>
            <div class="ui black button" @click="resetFieldsForm">Rséinitialiser</div>

            <div :disabled="form.processing" @click="submitForm"  class="ui right labeled icon button">
                Modifier
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
