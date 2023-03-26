<script setup>
import {useForm} from "@inertiajs/vue3";
import reporterModal from "./reprterModal.vue";

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
    entrainement:Object,
    index:Number
});

const form=useForm({});

const showReperterModal=(id)=> {
    $('#modalReporter'+id)
      .modal('show')
       ;
}

const annulerEntrainement=(id)=>{
    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir annuler cette scéance d'entrainement !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Confirmer'
}).then((result) => {
  if (result.isConfirmed) {
    form.put(route('entrainement.annuler',id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Scéance d'entrainement a été annulé avec succés", "Opération réussi");
        }

    });
    
  }
})
}


</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td> {{ entrainement.date }} </td>
      <td> {{ entrainement.equipe.nom }} </td>
      <td>{{ entrainement.etat }}</td>
      <td>
        
<button @click="showReperterModal(entrainement.id)"  class="ui icon button" data-content="Reporter la scéance d'entrainement">
  <i class="calendar  icon"></i>
</button>
<button @click="annulerEntrainement(entrainement.id)" class="ui icon button" data-content="Annuler la scéance d'entrainement">
  <i class="close icon"></i>
</button>
      </td>
      
    </tr>


    <reporterModal :entrainement="entrainement"/>

</template>