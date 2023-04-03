<script setup>
import {useForm} from "@inertiajs/vue3";

import UpdateUtilisateur from './UpdateUtilisateur.vue';
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

const user = computed(() => usePage().props.auth.user)



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
    user:Object,
    index:Number
});

const form=useForm({});





const desactiver=(id)=>{
    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir désactiver ce compte !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Désactiver'
}).then((result) => {
  if (result.isConfirmed) {
    form.patch(route('users.desactiver',id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Compte a été désactiver avec succés", "Opération réussi");
        }

    });
    
  }
})
}

const activer=(id)=>{
    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir activer ce compte !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Activer'
}).then((result) => {
  if (result.isConfirmed) {
    form.patch(route('users.activer',id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Compte a été activer avec succés", "Opération réussi");
            
        }

    });
    
  }
})
   
}

const showModalEditUser = (id) => {
    $("#updateUser"+id).modal("show");
};

</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td> {{ user.name }} </td>
      <td> {{ user.email }} </td>
    <td> {{ user.role }} </td>
    <td> {{ user.etat==0 ?'désactivé':'activé' }} </td>
      <td> 
        <button data-content="Modifier utilisateur" @click="showModalEditUser(user.id)" class="ui icon button">
               <i class="edit icon" ></i>
             </button>
             <button v-show="user.etat==='0'" @click="activer(user.id)" class="ui icon button" data-content="Activer">
               <i class="check icon" ></i>
             </button>
             <button v-show="user.etat==='1'" @click="desactiver(user.id)" class="ui icon button" data-content="Désactiver">
               <i class="power off icon" ></i>
             </button>
            
         </td>

      
      
    </tr>
 
      <UpdateUtilisateur :user="user"/> 
   




</template>