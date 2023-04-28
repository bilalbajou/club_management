<script setup>
import { useForm } from "@inertiajs/vue3";
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


const resetFieldsForm=()=>{
        form.reset();
        $('.dropdown')
        .dropdown('clear')
    ;
}




const form = useForm({
    name:null,
    email:null,
    role:null
});




const submitForm = () => {


    form.post(route("users.store"), {
        onSuccess: () => {
            toastr["success"]("Utilisateur a été ajouté avec succés", "Opération réussi");
            $('.dropdown')
    .dropdown('clear')
          ;
        },
        onError: () => {
            toastr["error"]("Utilisateur n'a pas été ajouté", "Opération échoué");
        }

    });
};

</script>
<template>
    <div class="ui modal" id="modalUser">
    <i class="close icon"></i>
    <div class="header">Ajouter nouveau utilisateur</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field" :class="form.errors.adversaire ? 'error' : ''">
                            <label>Nom</label>

                            <input v-model="form.name" type="text" placeholder="Nom" />
                        </div>
                        <div class="field" :class="form.errors.email ? 'error' : ''">
                            <label>Email</label>

                            <input v-model="form.email" type="text" placeholder="Email" />
                        </div>
                        <div class="field" :class="form.errors.role ? 'error' : ''">
                            <label>Type</label>
                            <select
                                
                                v-model="form.role"
                                class="ui dropdown"
                                id="select"
                            >
                                <option value="admin">
                                    Admin
                                </option>
                                <option value="user">
                                    User
                                </option>
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
