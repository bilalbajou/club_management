<script setup>
import { useForm } from '@inertiajs/inertia-vue3';

const form=useForm({});

const props = defineProps({
    joueur: Object,
});

const generatePDF=(id)=>{
  form.get(route('joueurs.generate',id),{
        preserveScroll:true,
        onSuccess:()=>{
            $('#ficheClient'+id)
            .modal('hide')
            ;
        }
        
    });
}


</script>
<template>
<div class="ui modal"  :id="'ficheClient'+joueur.id">
  <i class="close icon"></i>
  <div class="header">
    Joueur :  {{ joueur.nom }} {{ joueur.prenom }}
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img :src="joueur.image ? '/joueur/image/'+joueur.image:'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png'">
    </div>
    <div class="description">
      <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field">
                          <label>Nom</label>
                            <input
                                type="text"
                                
                                :placeholder="joueur.nom"
                                readonly
                            />
                        </div>
                        <div class="field">
                          <label>Prénom</label>

                            <input
                                type="text"
                                 
                                :placeholder="joueur.prenom"
                                readonly
                            />
                        </div>
                        <div class="field" >
                          <label>Age</label>


                            <input
                               
                                type="text"
                                 
                                :placeholder="joueur.age"
                                readonly
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                       
                          <label>CIN</label>

                            <input
                                type="text"
                                 
                                :placeholder="joueur.cin"
                                readonly
                            />
                        </div>
                        <div class="field">
                  
                          <label>Email</label>

                            <input
                                type="text"
                                 
                                :placeholder="joueur.email"
                                readonly
                            />
                        </div>
                        <div class="field">
                          <label>Téléphone</label>

                            <input
                                type="text"
                                 
                              :placeholder="joueur.telephone"
                                readonly
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                          <label>Adresse</label>

                            <input
                                type="text"
                                 
                                :placeholder="joueur.adresse"
                                readonly
                            />
                        </div>
                        <div class="field">
                            <label>Poste</label>

                            <input
                                type="text"
                                 
                                :placeholder="joueur.poste"
                                readonly
                            />
                        </div>
                        <div class="field">
                            <label>Equipe</label>
                            <input
                                type="text"
                                 
                                :placeholder="joueur.equipe.nom"
                                readonly
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Salaire</label>

                            <input
                                type="text"
                                :placeholder="joueur.salaire"
                                readonly
                            />
                        </div>
                    </div>
                    
                   
                </form>
    </div>
  </div>
  <div class="actions">
    <div class="ui black deny button">
      Fermer
    </div>
    <div @click="generatePDF(joueur.id)" class="ui positive right labeled icon button">
      Télécharger fiche joueur
      <i class="checkmark icon"></i>
    </div>
  </div>
</div>

</template>