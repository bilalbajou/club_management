<script>
import AdminDash from '@/Layouts/AdminDash.vue';
import {defineProps} from 'vue';
import { useForm } from '@inertiajs/vue3';
 export default{
     layout:AdminDash,

 }

</script>

<script setup>



const props = defineProps({
          joueur:Object,
          equipes:Array
       });


const form = useForm({
    nom: props.joueur.nom,
    prenom: props.joueur.prenom,
    cin: props.joueur.cin,
    email: props.joueur.email,
    adresse: props.joueur.adresse,
    poste: props.joueur.poste,
    telephone: props.joueur.telephone,
    salaire: props.joueur.salaire,
    contrat: props.joueur.contrat,
    image: props.joueur.image,
    equipe: props.joueur.equipe,
    age: props.joueur.age,
});

const resetForm=()=>{
    form.reset();
}

const submitForm=($id)=>{
    
       form.put(route('joueurs.update',$id));
       


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
                @click="submitForm(joueur.id)"
                class="ui primary right labeled icon button"
            >
                Ajouter
                <i class="checkmark icon"></i>
            </div>
            </div>
          
    </div>

        




</template>