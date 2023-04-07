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
<div class="ui  modal"  :id="'ficheStaff'+staff.id">
  <i class="close icon"></i>
  <div class="header">
    Joueur :  {{ staff.nom }} {{ staff.prenom }}
  </div>
  <div class="image content">
    <div class="ui medium image">
      <img :src="staff.image ? '/staff/image/'+staff.image:'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png'">
    </div>
    <div class="description">
      <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field">
                          <label>Nom</label>
                            <input
                                type="text"
                                
                                :placeholder="staff.nom"
                                readonly
                            />
                        </div>
                        <div class="field">
                          <label>Prénom</label>

                            <input
                                type="text"
                                 
                                :placeholder="staff.prenom"
                                readonly
                            />
                        </div>
                        <div class="field" >
                          <label>Age</label>


                            <input
                               
                                type="text"
                                 
                                :placeholder="staff.age"
                                readonly
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                       
                          <label>CIN</label>

                            <input
                                type="text"
                                 
                                :placeholder="staff.cin"
                                readonly
                            />
                        </div>
                        <div class="field">
                  
                          <label>Email</label>

                            <input
                                type="text"
                                 
                                :placeholder="staff.email"
                                readonly
                            />
                        </div>
                        <div class="field">
                          <label>Téléphone</label>

                            <input
                                type="text"
                                 
                              :placeholder="staff.telephone"
                                readonly
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                          <label>Adresse</label>

                            <input
                                type="text"
                                 
                                :placeholder="staff.adresse"
                                readonly
                            />
                        </div>
                        <div class="field">
                            <label>Poste</label>

                            <input
                                type="text"
                                 
                                :placeholder="staff.fonction"
                                 readonly
                                
                            />
                        </div>
                        <div class="field">
                            <label>Equipe</label>
                            <input
                                type="text"
                                 
                                :placeholder="staff.equipe.nom"
                                readonly
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Salaire</label>

                            <input
                                type="text"
                                :placeholder="staff.salaire"
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
    <!-- <div @click="generatePDF(staff.id)" class="ui positive right labeled icon button">
      Télécharger fiche staff
      <i class="checkmark icon"></i>
    </div> -->
  </div>
</div>

</template>