<script setup>
import {useForm} from "@inertiajs/vue3";
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
    user: Object
});

const form = useForm({
    name: props.user.name,
    email: props.user.email,
    role: props.user.role
});


const submitForm=()=>{
    form.patch(route('users.update',props.user.id),{
        preserveScroll:true,
        onSuccess:()=>{
            $('#updateUser'+props.user.id)
            .modal('hide')
            ;

            toastr["success"]("Utilisateur a été modifié avec succés", "Opération réussi");




        },
        onError:()=>{
          
            toastr["error"]("Utilisateur n'a pas été modifié", "Opération échoué");
        }
    });
}


  
</script>
<template>
  <div class="ui small modal" :id="'updateUser'+props.user.id">
  <div class="header">Modifier utilisateur</div>
  <div class="content">
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
  <div class="actions">
    <div class="ui cancel button">Annuler</div>
    <div @click="submitForm()" :disabled="form.processing" class="ui black button">Confirmer</div>
  </div>
</div>

       
</template>
