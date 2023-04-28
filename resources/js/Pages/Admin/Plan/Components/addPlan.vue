<script setup>
import { useForm } from "@inertiajs/vue3";
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
    duree: "1",
    montant:null
});

const submitForm = () => {
   
    
    form.post(route("plans.store"),{
        onSuccess:()=>{
            toastr["success"]("Plan a été ajouté avec succés", "Opération réussi");
            form.reset();
        },
        onError:()=>{
            toastr["error"]("Une erreur s'est produite", "Opération échoué");
        }
        

    });
};

</script>
<template>
    <div class="ui tiny modal" id="modalPlan">
        <i class="close icon"></i>
        <div class="header">Ajouter nouveau plan</div>
        <div class="image content">
            <div class="description">
                <form @submit.prevent="submitForm" class="ui form">
                    <div class="two fields">
               
                        <div class="field" :class="form.errors.duree ? 'error':''">
                            <label>Durée</label>
                            <select
                                v-model="form.duree"
                                class="ui dropdown"
                                id="select"
                            >
                                <option value="1">1 Mois</option>
                                <option value="3">3 Mois</option>
                                <option value="6">6 Mois</option>
                                <option value="12">12 Mois</option>
                            </select>
                        </div>
                        <div class="field" :class="form.errors.montant ? 'error':''">
                            <label>Montant (DH)</label>

                            <input
                                v-model="form.montant"
                                type="text"
                                placeholder="Montant"
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
