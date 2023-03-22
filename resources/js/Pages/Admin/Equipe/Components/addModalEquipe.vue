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

  




const form = useForm({
    nom: null
});

const submitForm = () => {
   
    
    form.post(route("equipes.store"),{
        onSuccess:()=>{
            toastr["success"]("Equipe a été ajouté avec succés", "Opération réussi");
            form.reset();
        },
        onError:()=>{
            toastr["warning"]("Veuillez vérifier votre champs", "Opération echoué");
        }

    });
};

</script>
<template>
    <div class="ui tiny modal" id="modalEquipe">
        <i class="close icon"></i>
        <div class="header">Ajouter nouveau equipe</div>
        <div class="image content">
            <div class="description">
                <form @submit.prevent="submitForm" class="ui form">
               
                        <div class="field" :class="form.errors.nom ? 'error':''">
                            <label>Nom d'équipe</label>

                            <input
                                v-model="form.nom"
                                type="text"
                                placeholder="Nom"
                            />
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
