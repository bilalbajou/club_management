<script setup>
import reporterMatche from "./reporterMatche.vue";
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
    matche:Object,
    index:Number
});

const form= useForm({})


const showModalReporter=(id)=>{
  $("#modalMatchReporter"+id).modal("show");
}
const annulerMatche=(id)=>{
  Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir annuler ce matche !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Confirmer'
}).then((result) => {
  if (result.isConfirmed) {
    form.put(route('matches.annuler',id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("ce matches a été annulé avec succés", "Opération réussi");
        }

    });
    
  }
})
}


</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td>{{ matche.adversaire }}</td>
      <td>{{ matche.date }}</td>
      <td>{{ matche.championat }}</td>
      <td>{{ matche.nb_joueurs }}</td>
      <td>{{ matche.etat }}</td>
      <td>
        <button class="ui icon button" @click="annulerMatche(matche.id)" data-content="Annuler le matche" >
      <i class="x icon icon" ></i>
    </button>
    <button @click="showModalReporter(matche.id)" class="ui icon button" data-content="Reporté le matche">
      <i class="calendar icon"></i>
    </button>
      </td>
    </tr>

    <reporterMatche :matche="matche"/>


</template>