<script setup>

import { useForm } from '@inertiajs/vue3';
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
    form.delete(route('joueurs.destroy', {
         id:$id,
         onSuccess:()=>{
            // toastr["success"]("Joueur a été supprimé avec succés", "Opération réussi");
            // console.log("dazd");
        }

    }));
    
  }
})
    
   
}



</script>

<template>
    <div class="ui">
        <div class="ui centered card">
            <div class="image">
                <img
                    src="https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png"
                />
            </div>
            <div class="content">
                <a v-show="joueur.poste != null" class="ui teal tag label">{{
                    joueur.poste
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
                    data-content=""
                    class="circular ui icon button"
                >
                    <i class="icon settings"></i>
                </button>
            </div>
        </div>
    </div>



</template>
