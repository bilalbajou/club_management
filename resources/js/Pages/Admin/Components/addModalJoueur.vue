<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
const props=defineProps({
  equipes:Array
})

let url=ref(null);

const previewImage=(e)=>{
  const file = e.target.files[0];
    url = URL.createObjectURL(file)
    console.log(url);
}


const form = useForm({
  nom: null,
  prenom: null,
  cin: null,
  email: null,
  poste: null,
  telephone: null,
  salaire: null,
  contrat: null,
  image: null,
  equipe: null,
  age: null
})






</script>
<template>

<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Ajouter nouveau joueur
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img  src="">
    </div>
    <div class="description">
  <form class="ui form">

    <div class="three fields">
      <div  class="field">
        <label>Nom</label>

        <input  v-model="form.nom" type="text"  placeholder="Nom">
      </div>
      <div class="field">
        <label>Prénom</label>

        <input v-model="form.prenom" type="text"  placeholder="Prénom">
     </div>
     <div class="field">
        <label>Age</label>

        <input v-model="form.age" type="text"  placeholder="Age">
     </div>
  
    </div>
    <div class="three fields">
      <div class="field">
        <label>CIN</label>

        <input v-model="form.cin" type="text"  placeholder="CIN">
      </div>
      <div class="field">
        <label>Email</label>

        <input v-model="form.email" type="text"  placeholder="Email">
     </div>
     <div class="field">
        <label>Téléphone</label>

        <input v-model="form.telephone" type="text"  placeholder="Téléphone">
     </div>
  
    </div>
    <div class="three fields">
      <div class="field">
        <label>Adresse</label>

        <input type="text" v-model="form.adresse"  placeholder="Adresse">
      </div>
      <div class="field">
        <label>Poste</label>

        <select name="gender" v-model="form.poste" class="ui dropdown" id="select">
  <option value="">Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
     </div>
     <div class="field">
      <label>Equipe</label>

      <select name="gender" v-model="form.equipe" class="ui dropdown" id="select">
       <option v-for="equipe in equipes" :key="equipe.id" value="{{equipe.id}}">{{ equipe.nom }}</option>
     
</select>
     </div>
  
    </div>
    <div class="three fields">
      <div class="field">
        <label>Salaire</label>

        <input type="text" v-model="form.salaire"  placeholder="Salaire">
     </div>
      <div class="field">
        <label>Contrat</label>

        <input type="file" >
      </div>
      <div class="field">
        <label>Image</label>

        <input type="file" @change="previewImage" accept="image/*" multiple>
     </div>
    
  
    </div>

  </form>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Annuler
    </div>
    <div class="ui positive right labeled icon button">
     Ajouter
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>


</template>