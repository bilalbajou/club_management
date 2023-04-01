<script setup>
import {useForm} from "@inertiajs/vue3";
import editModalEquipe from "./editModalEquipe.vue";
import listeJoueurs from "./listeJoueurs.vue";


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
    equipe:Object,
    index:Number
});


const showModalListeJoeurs=(id)=>{
    $("#modalListeJoueurs"+id).modal("show");
}

const showModalEditEquipe = (id) => {
    $("#modalEditEquipe"+id).modal("show");
};

</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td> {{ equipe.nom }} </td>
      <td> 
        <button data-content="Modifier nom d'équipe" @click="showModalEditEquipe(equipe.id)" class="ui icon button">
               <i class="edit icon" ></i>
             </button>
             <button @click="showModalListeJoeurs(equipe.id)" class="ui icon button" data-content="Liste des joueurs">
               <i class="users icon" ></i>
             </button>
         </td>

      
      
    </tr>

    <editModalEquipe :equipe="equipe"/>
    <listeJoueurs :id="equipe.id"/>



</template>