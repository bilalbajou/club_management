<script setup>
import { defineProps } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import EditModalSalaire from './editModalSalaire.vue';


const props = defineProps({
  result: Object,
  index: Number
});
const form = useForm({


});

const showEditModal=(id)=>{
  $('#editModalSalaire'+id).modal('show');
}
const deleteReglement = (id) => {

  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Êtes-vous sûr de vouloir supprimer ce reglement !",
    icon: 'warning',
    showCancelButton: true,
    showCancelButtonText: "Annuler",
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, Supprimer'
  }).then((result) => {
    if (result.isConfirmed) {
      form.delete(route('salaires.destroy',id), {
        preserveScroll: true,
        onSuccess: () => {
          toastr["success"]("Réglement a été supprimé avec succés", "Opération réussi");

        },
        onError: () => {
          toastr["error"]("Une erreur s'est produite lors de la suppression de ce réglement", "Opération échoué");
        }

      });

    }
  })


}




</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ result.nom }} {{ result.prenom }}</td>
    <td>{{ result.montant }}</td>
    <td>{{ result.mois }}</td>
    <td>{{ result.reglement_date }}</td>
    <td>{{ result.reste }}</td>
    <td>
      {{ result.nom_equipe }}
    </td>
    <td>
    
      <button @click="deleteReglement(result.id)" class="ui icon button">
        <i class="trash icon"></i>
      </button>
      <button @click="showEditModal(result.id)" class="ui icon button">
        <i class="edit icon"></i>
      </button>
    </td>
  </tr>

  <EditModalSalaire :salaire="result"/>
</template>
