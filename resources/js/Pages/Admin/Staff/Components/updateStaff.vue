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
          staff:Object,
          equipes:Array
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
   

};


const form = useForm({
    nom: props.staff.nom,
    prenom: props.staff.prenom,
    cin: props.staff.cin,
    email: props.staff.email,
    adresse: props.staff.adresse,
    fonction: props.staff.fonction,
    telephone: props.staff.telephone,
    salaire: props.staff.salaire,
    contrat: props.staff.contrat,
    image: props.staff.image,
    equipe: props.staff.equipe_id,
    age: props.staff.age
  
});


const resetForm=()=>{
    form.reset();
}

const submitForm=($id)=>{
         
       form.put(route('staffs.update',$id),{
        onSuccess:()=>{
            toastr["success"]("Staff a été modifié  avec succés", "Opération réussi");
        },
        onError:()=>{
            toastr["opération echoué"]("Staff a été modifié  avec succés", "Opération réussi");
        }
       });
       


}


</script>


<template>
    <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="titlePage">
                    <h2 class="text-4xl font-extrabold">Modifier staff:{{ staff.nom }} {{ staff.prenom }}</h2>
                </div>
            </div>
    </div>

    <div class="ui container">
        <img class="ui small circular centered fluid image" :src="url!=null ? url:form.image">
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
                        <div class="field" :class="form.errors.fonction ? 'error':''">
                            <label>Poste</label>

                            <select
                                v-model="form.fonction"
                                class="ui dropdown"
                                id="select"
                            >
                            <option value="Directeur technique">Directeur technique</option>
                                <option value="Entraineur">Entraineur</option>
                                <option value="Entraineur adjoint">Entraineur adjoint</option>
                                <option value="Entraineur gardien">Entraineur gardien</option>
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
                        <div class="field" :class="form.errors.salaire ? 'error':''">
                            <label>Salaire</label>

                            <input
                                type="text"
                                v-model="form.salaire"
                                placeholder="Salaire"
                            />
                        </div>
                        <div class="field" :class="form.errors.contrat ? 'error':''">
                            <label>Contrat</label>

                            <input type="file" @input="form.contrat = $event.target.files[0]"
 />
                        </div>
                        <div class="field" :class="form.errors.image ? 'error':''">
                            <label>Image</label>

                            <input
                                type="file"
                                @input="form.image = $event.target.files[0]"
                                @change="previewImage"
                                multiple
                            />
                            
                        </div>
                    </div>
                    
                </form>
                <div @click="resetForm" class="ui black deny button">Réinitialiser</div>
            <div
                :disabled="form.processing"
                @click="submitForm(staff.id)"
                class="ui primary right labeled icon button"
            >
                Modifier
                <i class="checkmark icon"></i>
            </div>
            </div>
          
    </div>

        




</template>