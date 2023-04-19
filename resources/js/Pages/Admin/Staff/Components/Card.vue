<script setup>


import { useForm } from '@inertiajs/vue3';
import  ficheStaff from './ficheStaff.vue';
import contratStaffModal from './contratStaffModal.vue';
import reglerSalaire from './reglerSalaire.vue';
import modalPrime from './modalPrime.vue';
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
    staff: Object
});

const form=useForm({});


const editStaff=($id)=>{
    form.get(route('staffs.edit',$id))
}

const showFicheStaff=($id)=>{
    $('#ficheStaff'+$id)
     .modal('show')
      ;
}

const showModalSalaire=(id)=>{
    $('#salaireStaffModal'+id)
     .modal('show')
      ;
}


const showModalPrime=(id)=>{
    $('#primeStaffModal'+id)
     .modal('show')
      ;
}
const previewContrat=($id)=>{
    $('#contratStaffModal'+$id)
     .modal('show')
      ;
}

const deleteStaff=($id)=>{

    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir supprimer ce staff !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Supprimer'
}).then((result) => {
  if (result.isConfirmed) {
    form.delete(route('staffs.destroy',$id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Staff a été supprimé avec succés", "Opération réussi");
            // console.log("dazd");
        }

    });
    
  }
})
    
   
}



</script>

<template>
    <div class="ui">
        <div class="ui centered card">
            <div class="image">
                <img
                    :src="staff.image==null ?'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png':'/staff/image/'+staff.image"
                />
            </div>
            <div class="content">
                <a v-show="staff.fonction != null" class="ui teal tag label">{{
                    staff.fonction
                }}</a>
                &nbsp;
                 <a v-show="staff.equipe.nom != null" class="ui teal tag label">{{
                    staff.equipe.nom
                }}</a>
                <br /><br />
                <a class="header">{{ staff.nom }} {{ staff.prenom }}</a>

                <div class="meta">
                    <span class="date">Age:{{ staff.age }}</span
                    ><br />
                    <span class="date">Téléphone: {{ staff.telephone }}</span>
                </div>
                <!-- <div class="description">
                            Kristy is an art director living in New York.
                        </div> -->
            </div>
            <div class="extra content">
                <button @click="deleteStaff(staff.id)"  data-content="Supprimer" class="circular ui icon button">
                    <i class="trash icon"></i>
                </button>
                <button @click="editStaff(staff.id)"  data-content="Modifier" class="circular ui icon button">
                    <i class="icon edit"></i>
                </button>
                <button
                    data-content="Fiche joueur"
                    class="circular ui icon button"
                    @click="showFicheStaff(staff.id)"
                >
                    <i class="icon eye"></i>
                </button>
                <button
                    v-show="staff.contrat"
                    @click="previewContrat(staff.id)"
                    data-content="Télecharger contrat"
                    class="circular ui icon button"
                >
                    <i class="icon file"></i>
                </button>
                <button
                   
                    @click="showModalPrime(staff.id)"
                    data-content="Affecter prime"
                    class="circular ui icon button"
                >
                    <i class="icon dollar sign"></i>
                </button>
                <button
                   
                   @click="showModalSalaire(staff.id)"
                   data-content="Régler salaire"
                   class="circular ui icon button"
               >
               <i class="check circle icon"></i>               </button>
            </div>
        </div>
    </div>

   <ficheStaff :staff="staff"/>
   <contratStaffModal :staff="staff" />
   <modalPrime :staff="staff" />
   <reglerSalaire :staff="staff" />


</template>
