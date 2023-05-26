<script>
import AdminDash from '@/Layouts/AdminDash.vue';
import {defineProps} from 'vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import {onMounted} from 'vue';
 export default{
     layout:AdminDash,

 }

</script>

<script setup>

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
          joueur:Object,
          equipes:Array,
          plans:Array
       });


       onMounted(() => {
    $(document).ready(function(){
  $('.button')
  .popup({
    on: 'hover'
  })
;
 
 $('.dropdown')
  .dropdown()
;
});


})

let url = ref();

const previewImage = (e) => {
    const file = e.target.files[0];
    url = URL.createObjectURL(file);
    document.getElementById("img_joueur").src=url;

};


const form = useForm({
    nom: props.joueur.nom,
    prenom: props.joueur.prenom,
    cin: props.joueur.cin,
    email: props.joueur.email,
    adresse: props.joueur.adresse,
    poste: props.joueur.poste,
    telephone: props.joueur.telephone,
    salaire: props.joueur.salaire,
    plan_id: props.joueur.plan_id,
    contrat: null,
    image: null,
    equipe: props.joueur.equipe_id,
    age: props.joueur.age,
    _method: 'put'

  
});


const resetForm=()=>{
    form.reset();
}

const submitForm=($id)=>{
         
       form.post(route('joueurs.update',$id),{
        preserveScroll:true,
        onSuccess:()=>{
            toastr["success"]("Joueur a été modifié  avec succés", "Opération réussi");
        },
        onError:()=>{
            toastr["error"]("Une erreur s'est produite", "Opération échoué");
        },
       });
       


}


</script>


<template>
    <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Modifier joueur:{{ joueur.nom }} {{ joueur.prenom }}</h2>
                </div>
            </div>
    </div>

    <div class="ui container">
        <img class="ui medium circular centered fluid image" id="img_joueur" :src="joueur.image!=null ? '/joueur/image/'+joueur.image:'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png'  " >
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form  class="ui form">
                    <div class="three fields">
                        <div class="field" :class="form.errors.nom ? 'error':''">
                            <label>Nom</label>

                            <input
                                v-model="form.nom"
                                type="text"
                                placeholder="Nom"
                            />
                        </div>
                        <div class="field" :class="form.errors.prenom ? 'error':''">
                            <label>Prénom</label>

                            <input
                                v-model="form.prenom"
                                type="text"
                                placeholder="Prénom"
                            />
                        </div>
                        <div class="field" :class="form.errors.age ? 'error':''">
                            <label>Age</label>

                            <input
                                v-model="form.age"
                                type="text"
                                placeholder="Age"
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field" :class="form.errors.cin ? 'error':''">
                            <label>CIN</label>

                            <input
                                v-model="form.cin"
                                type="text"
                                placeholder="CIN"
                            />
                        </div>
                        <div class="field" :class="form.errors.email ? 'error':''">
                            <label>Email</label>

                            <input
                                v-model="form.email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div class="field" :class="form.errors.telephone ? 'error':''">
                            <label>Téléphone</label>

                            <input
                                v-model="form.telephone"
                                type="text"
                                placeholder="Téléphone"
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field" :class="form.errors.adresse ? 'error':''">
                            <label>Adresse</label>

                            <input
                                type="text"
                                v-model="form.adresse"
                                placeholder="Adresse"
                            />
                        </div>
                        <div class="field" :class="form.errors.poste ? 'error':''">
                            <label>Poste</label>

                            <select
                                v-model="form.poste"
                                class="ui dropdown"
                                id="select"
                            >
                                <option value="Attack">Attack</option>
                                <option value="Defense">Défense</option>
                                <option value="Milieu">Milieu</option>
                                <option value="Gardien">Gardien</option>
                            </select>
                        </div>
                        <div class="field" :class="form.errors.equipe ? 'error':''">
                            <label>Equipe</label>

                            <select
                                name="gender"
                                v-model="form.equipe"
                                class="ui dropdown"
                                id="select"
                            >
                                <option
                                    v-for="equipe in equipes"
                                    :key="equipe.id"
                                    :value="equipe.id"
                                >
                                    {{ equipe.nom }}
                                </option>
                            </select>
                        </div>

                       
                    </div>
                    <div class="three fields">
                        <div v-show="[4,5,6,7].includes(form.equipe)" class="field" :class="form.errors.plan_id ? 'error':''">
                            <label>Plan d'adhésion</label>

                            <select
                                name="gender"
                                v-model="form.plan_id"
                                class="ui dropdown"
                                id="select"
                            >
                                <option
                                    v-for="plan in plans"
                                    :key="plan.id"
                                    :value="plan.id"
                                >
                                    {{ plan.duree }} Mois --- {{ plan.montant }} DH
                                </option>
                            </select>
                        </div>
                        <div v-show="[1,2,3].includes(form.equipe)" class="field" :class="form.errors.salaire ? 'error':''">
                            <label>Salaire</label>

                            <input
                                type="text"
                                v-model="form.salaire"
                                placeholder="Salaire"
                            />
                        </div>
                        <div class="field" :class="form.errors.contrat ? 'error':''">
                            <label>Contrat</label>

                            <input  type="file" @input="form.contrat = $event.target.files[0]"
 />
                        </div>
                        <div class="field" :class="form.errors.image ? 'error':''">
                            <label>Image</label>

                            <input
                                type="file"
                                @input="form.image = $event.target.files[0]"
                                @change="previewImage"
                                
                            />
                        </div>
                    </div>
                    
                </form>
                <div @click="resetForm" class="ui black deny button">Réinitialiser</div>
            <div
                :disabled="form.processing"
                @click="submitForm(joueur.id)"
                class="ui primary right labeled icon button"
            >
                Modifier
                <i class="checkmark icon"></i>
            </div>
            </div>
          
    </div>

        




</template>