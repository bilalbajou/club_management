<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
 // toastr add player
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
    equipes: Array,
});

let url = ref(null);

const previewImage = (e) => {
    const file = e.target.files[0];
    url = URL.createObjectURL(file);
};
const form = useForm({
    nom: null,
    prenom: null,
    cin: null,
    email: null,
    adresse: null,
    poste: null,
    telephone: null,
    salaire: null,
    contrat: null,
    image: null,
    equipe: null,
    age: null,
});

const submitForm = () => {
    // if (this.$refs.image) {
    //             this.form.image = this.$refs.image.files[0];
    // }
    // if (this.$refs.contrat) {
    //             this.form.contrat = this.$refs.contrat.files[0];
    // }
    
    form.post(route("joueurs.store"),{
        onSuccess:()=>{
            toastr["success"]("Joueur a été ajouté avec succés", "Opération réussi");
            form.reset();
        },
        onError:()=>{
            toastr["warning"]("Veuillez vérifier votre champs", "Opération echoué");
        }

    });
};

</script>
<template>
    <div class="ui modal" id="modalJoueur">
        <i class="close icon"></i>
        <div class="header">Ajouter nouveau joueur</div>
        <div class="image content">
            <div class="ui medium image">
                <img :src="url!=null ? url:'https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png'" />
            </div>
            <div class="description">
                <form @submit.prevent="submitForm" class="ui form">
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
                                <option value="Attack" selected>Attack</option>
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
                    
                    <!-- <div v-show="form.errors.any" class="ui error message visible">
                        <i class="close icon"></i>
                        <div class="header">
                            Veuillez vérifier les champs
                        </div>
                        <ul class="list">
                            <li v-for="value in form.errors"> {{ value }}</li>
                        </ul>
                    </div> -->
                </form>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">Annuler</div>
            <div
                :disabled="form.processing"
                @click="submitForm"
                class="ui right labeled icon button"
            >
                Ajouter
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
