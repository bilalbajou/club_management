<script setup>

import FicheClient from './FicheClient.vue';

import { useForm } from '@inertiajs/vue3';
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
    joueur: Object
});

const form=useForm({});


const editJoueur=($id)=>{
    form.get(route('joueurs.edit',$id))
}
const deleteJoueur=($id)=>{

    Swal.fire({
  title: 'Êtes-vous sûr?',
  text: "Êtes-vous sûr de vouloir supprimer ce joueur !",
  icon: 'warning',
  showCancelButton: true,
  showCancelButtonText:"Annuler",
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Oui, Supprimer'
}).then((result) => {
  if (result.isConfirmed) {
    form.delete(route('joueurs.destroy',$id),{
        preserveScroll:true,
         onSuccess:()=>{
            toastr["success"]("Joueur a été supprimé avec succés", "Opération réussi");
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
                    :src="joueur.image==null ?'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png':'/joueur/image/'+joueur.image"
                    
                />
            </div>
            <div class="content">
                <a v-show="joueur.poste != null" class="ui teal tag label">{{
                    joueur.poste
                }}</a>
                &nbsp;
                 <a v-show="joueur.equipe.nom != null" class="ui teal tag label">{{
                    joueur.equipe.nom
                }}</a>
                <br /><br />
                <a class="header">{{ joueur.nom }} {{ joueur.prenom }}</a>

                <div class="meta">
                    <span class="date">Age:{{ joueur.age }}</span
                    ><br />
                    <span class="date">Téléphone: {{ joueur.telephone }}</span>
                </div>
                <!-- <div class="description">
                            Kristy is an art director living in New York.
                        </div> -->
            </div>
            <div class="extra content">
                <button @click="deleteJoueur(joueur.id)"  data-content="Supprimer" class="circular ui icon button">
                    <i class="trash icon"></i>
                </button>
                <button @click="editJoueur(joueur.id)"  data-content="Modifier" class="circular ui icon button">
                    <i class="icon edit"></i>
                </button>
                <button
                    @click="showFichClient"
                    data-content="Fiche joueur"
                    class="circular ui icon button"
                >
                    <i class="icon eye"></i>
                </button>
            </div>
        </div>
    </div>

   <!-- <FicheClient :joueur="joueur"/> -->

</template>
