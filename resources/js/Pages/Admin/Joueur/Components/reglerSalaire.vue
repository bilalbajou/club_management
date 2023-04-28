<script setup>
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
    joueur:Object
});


const resetFieldsForm=()=>{
        form.reset();
      
}




const form = useForm({
    libelle:null,
    montant:props.joueur.salaire,
    mois:"janvier",
    joueur_id:props.joueur.id
});




const submitForm = () => {


    form.post(route("joueurs.salaire"), {
        preserveScroll:true,
        onSuccess: () => {
            toastr["success"]("Salaire a été reglé avec succés", "Opération réussi");
            form.reset();
            $('#salaireJoueurModal'+props.joueur.id).modal('hide');
          
        },
        onError: () => {
            toastr["error"]("Une erreur s'est produite", "Opération échoué");
        },

    });
};

</script>
<template>
    <div class="ui modal" :id="'salaireJoueurModal'+props.joueur.id">
    <i class="close icon"></i>
    <div class="header">Régler salaire pour {{ joueur.nom }} {{  joueur.prenom  }}</div>
    <div class="image content">

        <div class="description">
            <form @submit.prevent="submitForm" class="ui form">
                    <div class="three fields">
                        <div class="field" :class="form.errors.libelle ? 'error' : ''">
                            <label>Libellé</label>

                            <input v-model="form.libelle" type="text" placeholder="Libellé" />
                        </div>
                        <div class="field" :class="form.errors.montant ? 'error' : ''">
                            <label>Montant en (DH)</label>

                            <input v-model="form.montant" type="text" placeholder="Montant" />
                        </div>
                        <div class="field" :class="form.errors.mois ? 'error' : ''">
                            <label>Mois</label>
                            <select
                                v-model="form.mois"
                                class="ui dropdown"
                                id="select"
                            >
                                <option value="janvier">Janvier</option>
                                <option value="fevrier">Février</option>
                                <option value="mars">Mars</option>
                                <option value="avril">Avril</option>
                                <option value="mai">Mai</option>
                                <option value="juin">Juin</option>
                                <option value="juillet">Juillet</option>
                                <option value="aout">Août</option>
                                <option value="septembre">Septembre</option>
                                <option value="octobre">Octobre</option>
                                <option value="novembre">Novembre</option>
                                <option value="decembre">Décembre</option>

                               
                                
                            </select>

                        </div>

                    </div>
                 


                  
                </form>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">Annuler</div>
            <div class="ui black button" @click="resetFieldsForm">Rséinitialiser</div>

            <div :disabled="form.processing" @click="submitForm"  class="ui right labeled icon button">
                Ajouter
                <i class="checkmark icon"></i>
            </div>
        </div>
    </div>
</template>
