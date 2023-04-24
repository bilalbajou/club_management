<script setup>
import {useForm} from "@inertiajs/vue3";

const form=useForm({});

const props = defineProps({
    staff: Object,
});

// const generatePDF=(id)=>{
//   form.get(route('staffs.generate',id),{
//         preserveScroll:true,
//         onSuccess:()=>{
//             $('#ficheStaff'+id)
//             .modal('hide')
//             ;
//         }
        
//     });
// }


</script>
<template>
<div class="ui small modal"  :id="'ficheStaff'+staff.id">
  <i class="close icon"></i>
  <div class="header">
    Joueur :  {{ staff.nom }} {{ staff.prenom }}
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img :src="staff.image ? '/staff/image/'+staff.image:'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png'">
    </div>
    <div class="description">
      <div class="ui header">Informations personnelles</div>
      <p><b>Nom : </b> {{ staff.nom }}</p>
      <p><b>Prénom : </b> {{ staff.prenom }}</p>
      <p><b>Adresse : </b> {{ staff.adresse }}</p>
      <p><b>Téléphone : </b> {{ staff.telephone }}</p>
      <p><b>Email : </b> {{ staff.email }}</p>
      <p><b>Age : </b> {{ staff.age }}</p>
      <p><b>Salaire : </b> {{ staff.salaire }} DH</p>
      <p><b>Fonction : </b> {{ staff.fonction }}</p>
      <p><b>Equipe : </b> {{ staff.equipe.nom }}</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Fermer
    </div>
    <!-- <div @click="generatePDF(staff.id)" class="ui positive right labeled icon button">
      Télécharger fiche staff
      <i class="checkmark icon"></i>
    </div> -->
  </div>
</div>

</template>