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
    equipe: Object
});

const form = useForm({
    nom: props.equipe.nom
});


const editSubmit=()=>{
    form.patch(route('equipes.update',props.equipe.id),{
        preserveScroll:true,
        onSuccess:()=>{
            $("#modalEditEquipe"+props.equipe.id)
            .modal('hide')
            ;

            toastr["success"]("Equipe a été modifié avec succés", "Opération réussi");




        },
        onError:()=>{
          
            toastr["warning"]("Une erreur inattendue s'est produite, veuillez réessayer", "Opération echoué");

        }
    });
}


  
</script>
<template>
  <div class="ui mini modal" :id="'modalEditEquipe'+equipe.id">
  <div class="header">Modifier nom d'équipe</div>
  <div class="content">
    <form @submit.prevent="editSubmit" class="ui form">
      <div class="field" :class="form.errors.equipe ? 'error' : ''">
       
        <input type="text"  v-model="form.nom" />
      </div>
  
    </form>
      
  </div>
  <div class="actions">
    <div class="ui cancel button">Annuler</div>
    <div @click="editSubmit" :disabled="form.processing" class="ui black button">Confirmer</div>
  </div>
</div>

       
</template>
