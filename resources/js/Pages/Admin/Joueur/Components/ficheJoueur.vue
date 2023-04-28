<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

const form=useForm({});

const props = defineProps({
    joueur: Object,
});




</script>
<template>
<div class="ui small modal"  :id="'ficheClient'+joueur.id">
  <i class="close icon"></i>
  <div class="header">
    Joueur :  {{ joueur.nom }} {{ joueur.prenom }}
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img :src="joueur.image ? '/joueur/image/'+joueur.image:'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png'">
    </div>
    <div class="description">
      <div class="ui header">Informations personnelles</div>
      <p><b>Nom : </b> {{ joueur.nom }}</p>
      <p><b>Prénom : </b> {{ joueur.prenom }}</p>
      <p><b>Adresse : </b> {{ joueur.adresse }}</p>
      <p><b>Téléphone : </b> {{ joueur.telephone }}</p>
      <p><b>Email : </b> {{ joueur.email }}</p>
      <p><b>Age : </b> {{ joueur.age }}</p>
      <p v-show="[1,2,3].includes(joueur.equipe_id) && joueur.salaire"><b>Salaire : </b> {{ joueur.salaire }} DH</p>
      <!-- <p v-show="[4,5,6,7].includes(joueur.equipe_id)"><b>Plan d'adhésion : </b> {{ joueur.plan.duree }} Mois --- {{ joueur.plan.montant }} DH</p> -->
      <p><b>Poste : </b> {{ joueur.poste }}</p>
      <p><b>Equipe : </b> {{ joueur.equipe.nom }}</p>
     
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Fermer
    </div>
    
  </div>
</div>

</template>