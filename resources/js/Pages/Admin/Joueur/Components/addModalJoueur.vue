<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

// toastr add player
toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "1500",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

const props = defineProps({
    equipes: Array,
    plans:Array
});

console.log(props.plans);

let url = ref(null);

const previewImage = (e) => {
    const file = e.target.files[0];
    url = URL.createObjectURL(file);
    document.getElementById("img_player").src = url;
};
const form = useForm({
    nom: null,
    prenom: null,
    cin: null,
    email: null,
    adresse: null,
    poste: "Attack",
    telephone: null,
    salaire: null,
    contrat: null,
    image: null,
    equipe: 1,
    age: null,
    plan_id:null
});

const submitForm = () => {
      

    form.post(route("joueurs.store"), {
        onSuccess: () => {
            toastr["success"](
                "Joueur a été ajouté avec succés",
                "Opération réussi"
            );
            form.reset();
          
            
        },
        onError: () => {
            toastr["warning"](
                "Une erreur inattendue s'est produite, veuillez réessayer",
                "Opération echoué"
            );
        },
    });
};


</script>
<template>
    <div class="ui modal" id="modalJoueur">
        <i class="close icon"></i>
        <div class="header">Ajouter nouveau joueur</div>
        <div class="image content">
            <div class="ui medium image">
                <img
                    id="img_player"
                    src="https://www.kindpng.com/picc/m/235-2350646_login-user-name-user-avatar-svg-hd-png.png"
                />
            </div>
            <div class="description">
                <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div
                            class="field"
                            :class="form.errors.nom ? 'error' : ''"
                        >
                            <label>Nom</label>

                            <input
                                v-model="form.nom"
                                type="text"
                                placeholder="Nom"
                            />
                        </div>
                        <div
                            class="field"
                            :class="form.errors.prenom ? 'error' : ''"
                        >
                            <label>Prénom</label>

                            <input
                                v-model="form.prenom"
                                type="text"
                                placeholder="Prénom"
                            />
                        </div>
                        <div
                            class="field"
                            :class="form.errors.age ? 'error' : ''"
                        >
                            <label>Age</label>

                            <input
                                v-model="form.age"
                                type="text"
                                placeholder="Age"
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div
                            class="field"
                            :class="form.errors.cin ? 'error' : ''"
                        >
                            <label>CIN</label>

                            <input
                                v-model="form.cin"
                                type="text"
                                placeholder="CIN"
                            />
                        </div>
                        <div
                            class="field"
                            :class="form.errors.email ? 'error' : ''"
                        >
                            <label>Email</label>

                            <input
                                v-model="form.email"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div
                            class="field"
                            :class="form.errors.telephone ? 'error' : ''"
                        >
                            <label>Téléphone</label>

                            <input
                                v-model="form.telephone"
                                type="text"
                                placeholder="Téléphone"
                            />
                        </div>
                    </div>
                    <div class="three fields">
                        <div
                            class="field"
                            :class="form.errors.adresse ? 'error' : ''"
                        >
                            <label>Adresse</label>

                            <input
                                type="text"
                                v-model="form.adresse"
                                placeholder="Adresse"
                            />
                        </div>
                        <div
                            class="field"
                            :class="form.errors.poste ? 'error' : ''"
                        >
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
                        <div
                            class="field"
                            :class="form.errors.equipe ? 'error' : ''"
                        >
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
                        <div
                          v-show="[1,2,3].includes(form.equipe)"
                            class="field"
                            :class="form.errors.salaire ? 'error' : ''"
                        >
                            <label>Salaire</label>

                            <input
                                type="text"
                                v-model="form.salaire"
                                placeholder="Salaire"
                            />
                        </div>
                        <div
                          v-show="[4,5,6,7].includes(form.equipe)"
                            class="field"
                            :class="form.errors.plan_id ? 'error' : ''"
                        >
                            <label>Plan d'adhésion</label>
                            <select
                               
                                v-model="form.plan_id"
                                class="ui dropdown"
                                id="select"
                            >
                            <option
                                    v-for="plan in props.plans"
                                    :key="plan.id"
                                    :value="plan.id" 
                                >
                                    {{ plan.duree }} Mois --- {{ plan.montant }} DH
                                </option>
                                </select>

                            
                        </div>
                        <div
                            class="field"
                            :class="form.errors.contrat ? 'error' : ''"
                        >
                            <label>Contrat</label>

                            <input
                                type="file"
                                @input="form.contrat = $event.target.files[0]"
                            />
                        </div>
                        <div
                            class="field"
                            :class="form.errors.image ? 'error' : ''"
                        >
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
