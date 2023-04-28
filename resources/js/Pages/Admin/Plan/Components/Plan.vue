
<script setup>
import {useForm} from "@inertiajs/vue3";
import editPlan from "./editPlan.vue";


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
    plan:Object,
    index:Number
});

const form=useForm([]);


const showModalEditPlan = (id) => {
    $("#modalEditPlan"+id).modal("show");
};

const deletePlan=(id)=>{
    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir supprimer ce plan !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Supprimer'
}).then((result) => {
  if (result.isConfirmed) {
    form.delete(route('plans.destroy',id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Plan a été supprimé avec succés", "Opération réussi");
        },
        onError:()=>{
            toastr["error"]("Une erreur s'est produite lors de la suppression de ce plan", "Opération échoué");
        }

    });
    
  }
})
}

</script>

<template>
     <tr>
      <td>{{index+1}}</td>
      <td> {{ plan.duree }} Mois </td>
      <td>{{ plan.montant  }} DH</td>
      <td> 
        <button @click="deletePlan(plan.id)" class="ui icon button">
           <i class="trash icon"></i>
        </button>
        <button @click="showModalEditPlan(plan.id)" class="ui icon button">
           <i class="edit icon"></i>
        </button>
       
        
             
         </td>
       

      
      
    </tr>



    <editPlan :plan="plan"/>

</template>