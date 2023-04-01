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
    entrainement: Object
});

const form = useForm({
    date: null
});


const submitForm=()=>{
    form.patch(route('entrainements.update',props.entrainement.id),{
        preserveScroll:true,
        onSuccess:()=>{
            $('#modalReporter'+props.entrainement.id)
            .modal('hide')
            ;

            toastr["success"]("Entrainement a été reporté avec succés", "Opération réussi");




        },
        onError:()=>{
          
            toastr["warning"]("Veuillez vérifier votre champs", "Opération echoué");

        }
    });
}


  
</script>
<template>
  <div class="ui mini modal" :id="'modalReporter'+entrainement.id">
  <div class="header">Reporter la scéance d'entrainement</div>
  <div class="content">
    <form @submit.prevent="submitForm" class="ui form">
      <div class="field" :class="form.errors.date ? 'error' : ''">
       
        <input type="datetime-local"  v-model="form.date" />
      </div>
  
    </form>
      
  </div>
  <div class="actions">
    <div class="ui cancel button">Annuler</div>
    <div @click="submitForm()" :disabled="form.processing" class="ui black button">Confirmer</div>
  </div>
</div>

       
</template>
